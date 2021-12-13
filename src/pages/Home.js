import React from "react";
import { Container, Card, Button } from 'react-bootstrap';
import { NavigationHeader } from "../components";
import videoIcon from '../images/video-solid.svg';
import uploadIcon from '../images/upload-solid.svg';

const Home = () => {
  return (
    <div>
      <NavigationHeader />
      <Container>
        <div class="d-flex flex-row justify-content-center">
          <Card className="text-center" style={{width: '25%', margin: '20px'}}>
            <Card.Img varient='top' src={uploadIcon}/>
            <Card.Body>
              <Card.Title>Upload A Video</Card.Title>
              <Button href='/upload'>Upload</Button>
            </Card.Body>
          </Card>
          <Card className="text-center" style={{width: '25%', margin: '20px'}}>
            <Card.Img varient='top' src={videoIcon}/>
            <Card.Body>
              <Card.Title>View A Video</Card.Title>
              <Button href='/videos'>View</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  )
}

export default Home