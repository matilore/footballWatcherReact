import envVariables from '../config'
import YTSearch from '../utils/YTSearch';

function isFetchingVideos () {
  return {
    type: "FETCHING_VIDEOS",
  };
}

function addVideosToMenu(videos){
  return {
    type: "ADD_VIDEOS",
    payload: videos
  }
}

function fetchVideos(term){
  return function(dispatch) {
    //first in executing
    dispatch(isFetchingVideos());
    YTSearch({key: envVariables.API_YOUTUBE_KEY, maxResults:50, term: (term || '') + ' football skills goals'})
    .then(function(response) {
      let videos = response.data.items
      dispatch(addVideosToMenu(videos))
    })
    .catch(function(error) {
      console.error(error);
    });

  return null;
  }
}


function selectActiveTeam(team){
  return {
    type: "SELECT_ACTIVE_TEAM",
    payload: team
  }
}

export function chooseTeam(teamObject){
  return function(dispatch){
    dispatch(selectActiveTeam(teamObject))
    dispatch(fetchVideos(teamObject.name))
  }
}
