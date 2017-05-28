import axios from 'axios';

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

const YTSearch = (options) => {
  if (!options.key) {
    throw new Error('Youtube Search expected key, received undefined');
  }

  var params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    maxResults: options.maxResults,
    type: 'video'
  };

  return axios.get(ROOT_URL, { params: params })

};

export default YTSearch
