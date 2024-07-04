import React, { FC, useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardCarWrapper } from './CardCar.styled';
import ListGroup from 'react-bootstrap/ListGroup';

interface CardCarProps {
   num: string,
   vin: string,
   img: string,
   wanted: boolean,
   brand: string,
   model: string,
   modelyear: string,
   region: string,

}

const CardCar: FC<CardCarProps> = ({ num,img, vin, wanted, brand, model, modelyear, region}) => (
  <CardCarWrapper>
  <Card border="success" className="mb-4 shadow-sm" style={{ width: '18rem', borderRadius: '10px', overflow: 'hidden' }}>
    <Card.Img variant="top" src={img} style={{ height: '180px', objectFit: 'cover' }} />
    <Card.Body>
      <Card.Title>{brand}</Card.Title>
      <Card.Text>{model} {modelyear}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item className={wanted ? 'bg-danger text-white' : 'bg-success text-white'}>
        {wanted ? 'В розыске' : 'Не в розыске'}
      </ListGroup.Item>
      <ListGroup.Item>Vin: {vin}</ListGroup.Item>
      <ListGroup.Item>Регион: {region}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
    <Button variant="primary" href={`https://baza-gai.com.ua/nomer/${num}`}>Детальнее</Button>
    </Card.Body>
  </Card>
</CardCarWrapper>
);

export default CardCar;
