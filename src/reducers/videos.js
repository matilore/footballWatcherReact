const initialVideosState = {
  list: [],
  isLoading: false,
  selectedTeam: {},
  selectedVideo: {},
  menuCounter: 0
}

export default function videos(state = initialVideosState, action){
  if (action.type === "ADD_VIDEOS") {
    return {
      ...state,
      list: action.payload,
      isLoading: false,
    }
  } else if (action.type === "FETCHING_VIDEOS") {
    return {
      ...state,
      isLoading: true,
    }
  } else if(action.type === "SELECT_ACTIVE_TEAM"){
    return {
      ...state,
      selectedTeam: action.payload,
    }
  } else if(action.type === "SELECT_ACTIVE_VIDEO"){
    return {
      ...state,
      selectedVideo: action.payload,
    }
  } else if(action.type === "NEXT_VIDEOS"){
    if (state.menuCounter !== state.list.length - 5) {
      return {
          ...state,
          menuCounter: state.menuCounter + 5
      }
    } else {
      return state
    }
  } else if(action.type === "PREVIOUS_VIDEOS"){
    if (state.menuCounter !== 0) {
      return {
          ...state,
          menuCounter: state.menuCounter - 5
      }
    } else {
      return state
    }
  } else {
    return state
  }
}
