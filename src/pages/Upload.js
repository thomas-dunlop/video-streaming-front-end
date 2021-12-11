import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Player} from '../components'

const Upload = () => {
    const [metaData, setMetaData] = useState({
        name: '',
        value: '',
    })
    const [selectedFile, setSelectedFile] = useState(null)
    const [videoFilePath, setVideoFilePath] = useState(null)

    const handleMetaDataChange = (event) => {
        const target = event.target
        const name = target.name
        let data = target.value
        setMetaData({
            ...metaData,
            [name]: data
        })
    }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        const url = URL.createObjectURL(event.target.files[0])
        setVideoFilePath(url)
    }

    const handleSubmit = async (event) => {
        try {
            const formData = new FormData()

            formData.append('file', selectedFile);
            formData.append('name', metaData.name)
            formData.append('value', metaData.value)

            const response = await fetch('http://localhost:3000/api/upload',{
                method: 'POST',
                body: formData
            })

            if (response.ok) {
                window.location.reload()
            } else {
                throw new Error('Failed to Upload Video')
            }

        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>File Name</Form.Label>
                    <Form.Control type="text" name="name" value={metaData.name} onChange={handleMetaDataChange} placeholder="Enter File Name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="value">
                    <Form.Label>File Value</Form.Label>
                    <Form.Control type="text" name ="value" value={metaData.value} onChange={handleMetaDataChange} placeholder="Enter File Value"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="file">
                    <Form.Label>Attach File</Form.Label>
                    <Form.Control type="file" name="file" onChange={handleFileChange}/>
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            </Form>
            {
                videoFilePath ? (
                    <div>
                        <Player url={videoFilePath}/>
                    </div>
                ): (
                    null
                )
            }
        </div>
    )
}

export default Upload