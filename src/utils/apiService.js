import axios from 'axios'
import envVariables from '../config'
const API_URL = envVariables.API_URL



const apiService = {

  sendToken(token){
    return axios.post(`${API_URL}/api`, {token})
  },

  makeLogin(user){
    return axios.post(`${API_URL}/api/login`, user)
  },

  makeSignup(user){
    return axios.post(`${API_URL}/api/signup`, user)
  },

  addTeamToUser(data){
    return axios.post(`${API_URL}/api/users/addteam`, data)
  },

  getLeagues(){
    return axios.get(`${API_URL}/api/leagues`)
  },

  removeTeam(data){
    return axios.post(`${API_URL}/api/users/removeteam`, data)
  }

}

export default apiService
