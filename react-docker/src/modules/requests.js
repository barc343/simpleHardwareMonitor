import {AppConfig} from '../config'

class RequestHandler {
    constructor() {
        this.host = AppConfig.host;
    }

    getHeaders() {
        let headers = {}
        headers['Content-Type'] = 'application/json'
        // headers['Authorization'] = this.accessToken
        return headers
    }

    async postData(url = '', data = {}) {
        let hostUrl = this.host + url
        let headers = this.getHeaders()
        const response = await fetch(hostUrl, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: headers,
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        if (response.ok) {
            return response.json();
        }
        return response.text()
        // parses JSON response into native JavaScript objects
    }

    async patchData(url = '', data = {}) {
        let hostUrl = this.host + url
        let headers = this.getHeaders()
        const response = await fetch(hostUrl, {
            method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
            headers: headers,
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        if (response.ok) {
            return response.json();
        }
        return response.text()
        // parses JSON response into native JavaScript objects
    }

    async getData(url = '') {
        let hostUrl = this.host + url
        let headers = this.getHeaders()
        const response = await fetch(hostUrl, {
            method: 'GET',
            headers: headers,
        })
        // if (response.ok) {
        //     return response.json();
        // }
        // return response.text()
        return response.json();
    }

    async deleteData(url = '') {
        let hostUrl = this.host + url
        let headers = this.getHeaders()
        const response = await fetch(hostUrl, {
            method: 'DELETE',
            headers: headers,
        })
        // if (response.ok) {
        //     return response.json();
        // }
        // return response.text()
        return response.json();
    }
}

export const apiHandler = new RequestHandler()