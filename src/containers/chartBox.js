import React, { Component } from 'react';
import ChartList from '../components/chartList.js';
import Song from '../components/Song.js';



class ChartBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };


    this.handleSongSelected = this.handleSongSelected.bind(this);
  }


  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(songsData => this.setState({songs: songsData.feed.entry}))
    .catch(error => console.log("Error:", error))
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs[index]
    this.setState({currentSong: selectedSong})
  }



  render(){
    return (
      <div>
        <h1>UK Top 20</h1>
        <h2>Find out more about each song from the menu below</h2>
        <ChartList
          songs={this.state.songs}
          onSongSelected={this.handleSongSelected}
        />
        <Song song={this.state.currentSong}/>
      </div>
    );
  };

}

export default ChartBox;
