import React, { Component } from 'react';

const Song = (props) => {
  if (!props.song) return null
  return (
    <div>
      <h3>{props.song.feed}</h3>
    </div>

  )
}

export default Song;
