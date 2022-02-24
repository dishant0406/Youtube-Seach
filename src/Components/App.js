import React, { Component } from 'react';
import SearchBar from './searchbox/SearchBox';
import youtube from './apis/youtube';

class App extends Component {

  state = {
    videos: []
  };

  onTermSubmit = async term => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: res.data.items })
    res.data.items.map(el => console.log(el.snippet.title))
  }


  render() {
    return (
      <div className='ui container'>
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    )
  }
}

export default App;