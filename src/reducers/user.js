export default function user(state = {}, action){
  if (action.type === "ADD_USER") {
      return action.payload
  } else if (action.type === "UPDATE_USER"){
      return action.payload
  } else if(action.type === "LOGOUT"){
      return {}
  } else {
    return state
  }
}
