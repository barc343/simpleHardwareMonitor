import { useEffect, useState } from 'react';
import { Button, Container, Card, ProgressBar, Badge, Table } from 'react-bootstrap';
import { apiHandler } from '../../../modules/requests';
import { Memory } from 'react-bootstrap-icons';

export const RamCard = ({data}) => {

    if (data) {return (
      <div>
        <Card className='m-3'>
          <Card.Body>
            <Memory size="35" className='mb-2'/>
            <Card.Title>Ram monitoring<Badge className='float-end'>{(data.total / (1024.0 ** 3)).toFixed(2)} GB</Badge></Card.Title>
            <Card.Text>
              <Table>
              <thead>
                <tr>
                    <th>RAM</th>
                    <th className='text-end'>USAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>free</td>
                  <td><Badge className='float-end' bg="success">{(data.available / (1024.0 ** 3)).toFixed(2)} GB</Badge></td>
                </tr>
                <tr>
                  <td>busy</td>
                  <td><Badge className='float-end' bg="danger">{(data.active / (1024.0 ** 3)).toFixed(2)} GB</Badge></td>
                </tr>
                <tr>
                  <td colSpan={2}><ProgressBar variant='dark' now={data.percent} label={`${data.percent}%`} /></td>
                </tr>
              </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>        
      </div>
    );} else return null
  }