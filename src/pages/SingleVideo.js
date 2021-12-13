import React from "react";
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import { Player, NavigationHeader } from '../components'
import URL from '../constants'

const SingleVideo = () => {
  const { id } = useParams()
  const url = `${URL}api/stream/${id}`
  return (
    <div>
      <NavigationHeader />
      <Container fluid>
        <div class="d-flex flex-column justify-content-center">
          <Player url={url} />
          <p>{`Video id: ${id}`}</p>
        </div>
        <a href={url} download>Download</a>
      </Container>
    </div>
  )
}

export default SingleVideo