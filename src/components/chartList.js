import React, { Component } from 'react';

const ChartList = (props) => {

  const options = props.songs.map((song, index) => {
    return <option value={index} key={index}>{song['im:name'].label}</option>
  })

  function handleChange(event) {

    props.onSongSelected(event.target.value);
  }

  return (
    <select name="song-selector" id="song-selector" onChange={handleChange}>
      <option disabled selected>Choose a song...</option>
      { options }
    </select>
  )

};

export default ChartList;
