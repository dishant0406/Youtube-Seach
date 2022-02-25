import React, { Component } from 'react';
import SearchBar from './searchbox/SearchBox';
import Videolist from './videolist/videolist';
import youtube from './apis/youtube';
import VideoDetail from './Videodetail/videodetail';

class App extends Component {

  state = {
    videos: [],
    video: null,

  };

  onTermSubmit = async term => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: res.data.items });

  }

  onVideoSelect = video => {
    this.setState({ video });
  }


  render() {

    if (!this.state.video) {
      return (
        <div className='ui container'>
          <SearchBar onTermSubmit={this.onTermSubmit} />
          <Videolist onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
        </div>
      )
    }

    return (
      <div className='ui container'>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.video} />
            </div>
            <div className='five wide column'>
              <Videolist onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;