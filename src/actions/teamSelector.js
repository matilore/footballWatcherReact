import apiService from '../utils/apiService'


function sendLeagues(leagues){
  return {
    type: "FETCH_LEAGUES",
    payload: leagues
  }
}

export function fetchLeagues() {

  return function(dispatch) {
    apiService.getLeagues()
    .then(function(response){
      dispatch(sendLeagues(response.data.leagues));
    })
    .catch(function(error){console.log(error)})
  return null;
  }
}




export function removeTeamFromUser(data){
  return function(dispatch) {

    apiService.removeTeam(data)
    .then(function(response){
      let userUpdated = response.data.user
      dispatch(updateUser(userUpdated))
    })
    .catch(function(error){console.log(error)})

  return null;
  }
}


function updateUser(user){
  return {
    type: 'UPDATE_USER',
    payload: user
  }
}





export function increaseLeague(leaguesLength){
  return {
    type: "INCREASE_LEAGUE",
    payload: leaguesLength
  }
}

export function decreaseLeague(leaguesLength){
  return {
    type: "DECREASE_LEAGUE",
    payload: leaguesLength
  }
}

export function increaseTeam(teamsLength){
  return {
    type: "INCREASE_TEAM",
    payload: teamsLength
  }
}

export function decreaseTeam(teamsLength){
  return {
    type: "DECREASE_TEAM",
    payload: teamsLength
  }
}
