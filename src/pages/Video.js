import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import { Player, NavigationHeader } from '../components'

const Video = () => {
  const { id } = useParams()
  const url = `http://localhost:3000/api/videos/${id}`
  return (
    <div>
      <NavigationHeader />
      <Container fluid>
        <div class="d-flex flex-column justify-content-center">
          <Player url={url} />
          <p>{`Video id: ${id}`}</p>
        </div>
      </Container>
    </div>
  )
}

export default Video