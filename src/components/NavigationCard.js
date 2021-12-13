import React from "react";
import { Button, Card } from 'react-bootstrap';

const NavigationCard = (props) => {
  return (
    <Card 
      className="text-center" 
      style={{
        width: '25%', 
        margin: '20px'
      }}
    >
      <Card.Img varient='top' src={props.imageURL} style={{
        height: '200px',
        margin: 'auto'
      }}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button href={props.endpoint}>{props.buttonTitle}</Button>
      </Card.Body>
    </Card>
  )
}

export default NavigationCard