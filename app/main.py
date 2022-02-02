from typing import Optional

from fastapi import FastAPI

import psutil
import socket
import docker
from psutil._common import bytes2human

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3011",
    "http://192.168.0.231:3011",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def create_cpu_info():
    res = {}
    res['cpu_count'] = psutil.cpu_count(logical=False)
    res['cpu_percent'] = psutil.cpu_percent(interval=1, percpu=True)
    res['cpu_total_percent'] = psutil.cpu_percent(interval=1)
    return res


def create_docker_info():
    client = docker.DockerClient(base_url='unix://var/run/docker.sock')
    container_list = []
    for container in client.containers.list():
        container_list.append({"id": container.short_id, "name": container.name, "status": container.status})
    return container_list


@app.get("/")
def read_root():
    return "##################### HELLO IN SIMPLE-HWMONITOR API #####################"

@app.get("/device_info")
def read_device_info():
    return socket.gethostname()

@app.get("/hw_info")
def read_ram_info():
    res = {}
    res['ram'] = dict(psutil.virtual_memory()._asdict())
    res['cpu'] = create_cpu_info()
    res['docker'] = create_docker_info()
    return res