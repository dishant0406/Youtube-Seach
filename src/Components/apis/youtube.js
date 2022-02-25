import axios from "axios";


// const KEY = 'AIzaSyCgphTHnAk6lEiMsAt8c4Z_37OahCQGU4o';
const KEY = 'AIzaSyBZf5WWkNG_9g5-BA6Hhrpa7OMwc2bnw4Q';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY
  }
});
