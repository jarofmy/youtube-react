import axios from 'axios';

const KEY = 'AIzaSyDVpU0YubxT-_fShFyZhvTJicSdKvzgnYM';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part:  'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
});
