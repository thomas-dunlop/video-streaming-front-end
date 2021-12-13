import React from "react";
import { Container } from 'react-bootstrap';
import { NavigationHeader, NavigationCard } from "../components";
import videoIcon from '../images/video-solid.svg';
import uploadIcon from '../images/upload-solid.svg';

const Home = () => {
  return (
    <div>
      <NavigationHeader />
      <Container>
        <div class="d-flex flex-row justify-content-center">
          <NavigationCard title="Upload A Video" buttonTitle="Upload" endpoint="/upload" imageURL={uploadIcon}/>
          <NavigationCard title="View A Video" buttonTitle="View" endpoint="/videos" imageURL={videoIcon}/>
        </div>
      </Container>
    </div>
  )
}

export default Home