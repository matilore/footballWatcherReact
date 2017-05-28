import React from 'react'
import axios from 'axios'
import styled from "styled-components"

import actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import envVariables from '../../config'
const API_URL = envVariables.API_URL


class TeamSelector extends React.Component {

  componentWillMount(){
    this.props.fetchLeagues()
  }

  leagueReady(){
    if (Object.keys(this.props.teamSelector.leagues).length !== 0) {
      return <h2 style={{width: '30%', textAlign: 'center'}} ref="league">{this.props.teamSelector.leagues[this.props.teamSelector.leagueCounter.value].name}</h2>
    }
  }

  teamOfSelectedLeague(){
    if (Object.keys(this.props.teamSelector.leagues).length !== 0) {
      this.selectedLeague = this.props.teamSelector.leagues[this.props.teamSelector.leagueCounter.value].teams
      let currentTeamObject = this.props.teamSelector.leagues[this.props.teamSelector.leagueCounter.value].teams[this.props.teamSelector.teamCounter.value]
      return <img style={{width: "200px", height: "200px"}} alt={currentTeamObject.name} src={currentTeamObject.teamLogo} />
    }
  }

  submit(){
    let data = {
      user_token: localStorage.getItem('token'),
      team: {
            name: this.props.teamSelector.leagues[this.props.teamSelector.leagueCounter.value].teams[this.props.teamSelector.teamCounter.value].name,
            logo: this.props.teamSelector.leagues[this.props.teamSelector.leagueCounter.value].teams[this.props.teamSelector.teamCounter.value].teamLogo,
            league: this.props.teamSelector.leagues[this.props.teamSelector.leagueCounter.value].name,
            leagueId: this.props.teamSelector.leagues[this.props.teamSelector.leagueCounter.value].id
          }
    }

    axios.post(`${API_URL}/api/users/addteam`, data)
    .then(function(response){
      this.props.history.push('/')
      this.props.chooseTeam(response.data.teamAdded)
    }.bind(this))
    .catch(function(error){console.log(error)})
  }

  render () {
    return(
      <Wrapper>
        <MiniWrapper>
          <Button onClick={this.props.decreaseLeague}><i className="fa fa-angle-double-left fa-3x" aria-hidden="true"></i></Button>
          {this.leagueReady()}
          <Button onClick={this.props.increaseLeague}><i className="fa fa-angle-double-right fa-3x" aria-hidden="true"></i></Button>
        </MiniWrapper>

        <MiniWrapper>
          <Button onClick={this.props.decreaseTeam} ><i className="fa fa-angle-double-left fa-3x" aria-hidden="true"></i></Button>
          {this.teamOfSelectedLeague()}
          <Button onClick={this.props.increaseTeam}><i className="fa fa-angle-double-right fa-3x" aria-hidden="true"></i></Button>
          <br />
      </MiniWrapper>

      <MiniWrapper>
        <Button backgroundColor={'rgb(7, 5, 51)'} height={'50px'} color={'white'} onClick={this.submit.bind(this)}>Add Team</Button>
    </MiniWrapper>

    </Wrapper>

    )
  }
}

const Wrapper = styled.div`
  width: 60%;
  margin-top: 10%;
  margin-left: auto
  margin-right: auto

`

const MiniWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5%;
`
const Button = styled.button`
  backgroundColor: ${(props) => props.backgroundColor || 'transparent'};
  height: ${(props) => props.height || 'auto'};
  width: 100px;
  border: none;
  outline: none;
  color: ${(props) => props.color || 'black'};
  fontSize: 1em;
`


function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({...actionCreators}, dispatch)
}




export default connect(mapStateToProps, mapDispachToProps)(TeamSelector);
