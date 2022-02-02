import { useEffect, useState } from 'react';
import { Button, Container, Card, Table, Badge } from 'react-bootstrap';
import { apiHandler } from '../../../modules/requests';
import { Cpu } from 'react-bootstrap-icons';

export const CpuCard = ({data}) => {

    if (data) {return (
      <div>
        <Card className='m-3'>
          <Card.Body>
            <Cpu size="35" className='mb-2'/>
            <Card.Title>CPU monitoring<Badge className='float-end'>{data.cpu_count} core</Badge></Card.Title>
            <Card.Text>
            <Table>
            <thead>
                <tr>
                    <th>CPU</th>
                    <th className='text-end'>USAGE</th>
                </tr>
            </thead>
            <tbody>
              {data.hasOwnProperty('cpu_percent') && data.cpu_percent.map((item, i) => {
                  return (
                    //   <p><b>CPU {i+1}:</b> <Badge className='float-end' bg="danger">{item}</Badge></p>
                    <tr key={i}>
                        <td><b>CPU {i+1}</b></td>
                        <td className='text-primary text-end'>{item} %</td>
                    </tr>                    
                  )
              })}
                <tr className='bg-dark'>
                    <td className='text-white'><b>TOTAL</b></td>
                    <td className='text-white text-end'>{data.cpu_total_percent} %</td>
                </tr>              
            </tbody>
            </Table>              
            </Card.Text>
          </Card.Body>
        </Card>        
      </div>
    );} else return null
  }