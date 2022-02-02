import { useEffect, useState } from 'react';
import { Button, Container, Card, Table, Badge } from 'react-bootstrap';
import { apiHandler } from '../../../modules/requests';
import { Box } from 'react-bootstrap-icons';

export const DockerCard = ({data}) => {

    if (data) {return (
      <div>
        <Card className='m-3'>
          <Card.Body>
            <Box size="35" className='mb-2'/>
            <Card.Title>DOCKER monitoring<Badge className='float-end'>count {data.length}</Badge></Card.Title>
            <Card.Text>
            <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th className='text-end'>STATUS</th>
                </tr>
            </thead>
            <tbody>
              {data.length > 0 && data.map((item, i) => {
                  return (
                    //   <p><b>CPU {i+1}:</b> <Badge className='float-end' bg="danger">{item}</Badge></p>
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td><b>{item.name}</b></td>
                        <td className='text-end'><Badge bg={item.status === "running" ? 'success' : 'danger'}>{item.status}</Badge></td>
                    </tr>                    
                  )
              })}           
            </tbody>
            </Table>              
            </Card.Text>
          </Card.Body>
        </Card>        
      </div>
    );} else return null
  }