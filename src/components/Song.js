import React, { Component } from 'react';

const Song = (props) => {
  if (!props.song) return null
  return (
    <div>
      <h3>Title: {props.song['im:name'].label}</h3>
      <h3>Artist: {props.song['im:artist'].label}</h3>
      <h3>Current Chart Position: {props.song.category.attributes['im:id']}</h3>
    </div>

  )
}

export default Song;
