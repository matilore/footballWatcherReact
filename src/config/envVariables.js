require("dotenv").config();

export default {
  API_YOUTUBE_KEY: process.env.REACT_APP_API_YOUTUBE_KEY,
  API_URL: (process.env.NODE_ENV == 'production' ? 'https://footballwatcher.herokuapp.com' : process.env.REACT_APP_API_URL)
}
