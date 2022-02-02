import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { HeaderComponent } from './components/core/header';
import { RamCard } from './components/hwmonitor/ram';
import { CpuCard } from './components/hwmonitor/cpu';
import { useEffect, useState } from 'react';
import { apiHandler } from './modules/requests';
import { DockerCard } from './components/hwmonitor/docker';

const App = () => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    const interval = setInterval(() => {
        apiHandler.getData('hw_info').then(resp => {
            setData(resp)
        })
    }, 5000);
    if (!data) {
      apiHandler.getData('hw_info').then(resp => {
        setData(resp)
      })
    }
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <HeaderComponent/>
      <Container>
        <Row>
          <Col sm='4'>
            <RamCard data={data && data.ram}/>
          </Col>
          <Col sm='4'>
            <CpuCard data={data && data.cpu}/>
          </Col>
          <Col sm='4'>
            <DockerCard data={data && data.docker}/>
          </Col>
        </Row>      
      </Container>
    </div>
  );
}

export default App;
