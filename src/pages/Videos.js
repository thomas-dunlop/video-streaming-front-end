import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table'

const Videos = () => {
    const [pageData, setPageData] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/api/videos')
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
        .finally(() =>{
            setLoaded(true)
        })
    }, [])
    
    if(loaded === false){
        return <p>Loading</p>
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Value</th>
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
                                    <td><a href={'/videos/' + element._id}>Watch</a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                
            </Table>
        </div>
    )
}

export default Videos