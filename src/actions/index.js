import { authUser, logout } from './dashboard'
import { chooseTeam } from './lateralBar'
import { fetchLeagues, removeTeamFromUser, increaseLeague, decreaseLeague, increaseTeam, decreaseTeam } from './teamSelector'
import { selectActiveVideo, nextMenuVideos, previousMenuVideos } from './ytMenu'

const actionCreators = {
  authUser,
  logout,
  chooseTeam,
  fetchLeagues,
  removeTeamFromUser,
  increaseLeague,
  decreaseLeague,
  increaseTeam,
  decreaseTeam,
  selectActiveVideo,
  nextMenuVideos,
  previousMenuVideos
}

export default actionCreators
