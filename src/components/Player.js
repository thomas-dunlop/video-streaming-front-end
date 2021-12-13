import React from 'react'
import ReactPlayer from 'react-player'

const Player = (
  url
) => {
  return (
    <ReactPlayer url={url.url} controls />
  )
}

export default Player