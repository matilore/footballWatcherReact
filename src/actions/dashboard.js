export function authUser(user){
  return {
    type: "ADD_USER",
    payload: user
  }
}

export function logout(){
  return {
    type: "LOGOUT"
  }
}
