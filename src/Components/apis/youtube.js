import axios from "axios";


const KEY = 'AIzaSyCgphTHnAk6lEiMsAt8c4Z_37OahCQGU4o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
