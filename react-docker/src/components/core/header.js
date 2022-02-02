import { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { apiHandler } from '../../modules/requests';

export const HeaderComponent = () => {
    const [deviceInfo, setDeviceInfo] = useState(null)

    useEffect(() => {
        apiHandler.getData('device_info').then(resp => {
            setDeviceInfo(resp)
        })
    }, [])

    return (
        <div className='mb-4'>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">simple <b>Hardware Monitor</b></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    {deviceInfo}
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>            
        </div>
    )
}