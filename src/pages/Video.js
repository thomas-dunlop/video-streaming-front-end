import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import {Player} from '../components'

const Video = () => {
    const {id} = useParams()
    const url = `http://localhost:3000/api/videos/${id}`
    return (
        <div>
            <p>{`Video page for id: ${id}`}</p>
            <Player url={url}/>
        </div>
    )
}

export default Video