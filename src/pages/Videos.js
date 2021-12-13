import React, { useState, useEffect } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { NavigationHeader } from "../components";
import URL from '../constants'

const Videos = () => {
  const [pageData, setPageData] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [query, setQuery] = useState({})

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

  const handleQueryChange = (event) => {
    const target = event.target
    const name = target.name
    let data = target.value
    setQuery({
      ...query,
      [name]: data
    })
  }

  const handleQuerySubmit = async () => {
    try {
      const url = URL + 'api/videos/?' + (new URLSearchParams(query)).toString()
      const response = await fetch(url)

      if (response.ok) {
        let data = await response.json()
        setPageData(data)
        console.log(data)
      } else {
        throw new Error('Failed to get Videos')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const clearQuery = () => {
    window.location.reload()
  }

  if (loaded === false) {
    return <p>Loading</p>
  }

  return (
    <div>
      <NavigationHeader />
      <Container>
        {
          pageData ? (
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
          ): (
            <p>No videos found</p>
          )
        }
        <br></br>
        <h3>Query</h3>
        <h5>Current Query:</h5>
        <p>{JSON.stringify(query)}</p>
        <Form>
          <Form.Group className="mb-3" controlId="metadata.name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="metadata.name" onChange={handleQueryChange} placeholder="Enter Name To Query"/>
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="metadata.value">
            <Form.Label>Value</Form.Label>
            <Form.Control type="text" name="metadata.value" onChange={handleQueryChange} placeholder="Enter Value To Query"/>
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={handleQuerySubmit}>Submit</Button>
        <br></br>
        <br></br>
        <Button variant="primary" onClick={clearQuery}>Clear</Button>
      </Container>
    </div>
  )
}

export default Videos