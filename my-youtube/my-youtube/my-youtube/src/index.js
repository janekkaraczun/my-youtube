import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/searchbar';
import VidDetail from './components/vid-detail';
import VidList from './components/vid-list';

const API_KEY = 'AIzaSyAaEhvi47aiHBs5dzBBOzR4UQBvkJmOfLg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  this.videoSearch("papież zawadiaka");
}


videoSearch(term) {
  YTSearch({key: API_KEY, term: term }, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo:videos[0]
     });
  });
}



  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);

  return (
      <div>
        <Searchbar onSearchTermChange={videoSearch} />
        <VidDetail  video={this.state.selectedVideo}/>
        <VidList
          onVidSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
