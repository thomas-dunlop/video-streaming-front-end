import React from 'react'
import ReactPlayer from 'react-player'

const Player = (
    url
) => {
    return (
        <div>
            <ReactPlayer url={url.url} controls/>
        </div>
        
    )
}

export default Player