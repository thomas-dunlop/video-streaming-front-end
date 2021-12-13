import React from 'react'
import ReactPlayer from 'react-player'

const Player = (props) => {
  return (
    <ReactPlayer url={props.url} controls />
  )
}

export default Player