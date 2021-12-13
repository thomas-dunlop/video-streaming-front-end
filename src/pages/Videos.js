import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import { NavigationHeader } from "../components";
import URL from '../constants'

const Videos = () => {
  const [pageData, setPageData] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch(URL + 'api/videos')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => {
        setPageData(data)
        setLoaded(true)
      })
      .catch(error => {
        console.error("Error fetching data", error)
      })
      .finally(() => {
        setLoaded(true)
      })
  }, [])

  if (loaded === false) {
    return <p>Loading</p>
  }

  return (
    <div>
      <NavigationHeader />
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Value</th>
              <th>Date Created</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {
              pageData.map(element => {
                return (
                  <tr>
                    <td>{element._id}</td>
                    <td>{element.metadata.name}</td>
                    <td>{element.metadata.value}</td>
                    <td>{element.uploadDate}</td>
                    <td><a href={'/videos/' + element._id}>Watch</a></td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Videos