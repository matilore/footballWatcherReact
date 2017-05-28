import React from 'react'
import styled from 'styled-components'

import actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Logout from '../Logout'


class LateralBar extends React.Component {

  constructor(props){
    super(props)
    this.teams = props.user.teams
  }


  clickForRemove(event) {
    let target = event.target
    let defaultClass = target.className

    setTimeout(()=>{
      var answer = confirm('are you sure you wanna remove this team');
      if (answer === true) {
        let data = {
          user_token: localStorage.getItem('token'),
          teamName: target.id
        }
        this.props.removeTeamFromUser(data)
      } else {
          target.className = defaultClass
          target.style.filter = "none";
          target.style.opacity = "1";
      }
    }, 100)
    event.target.className += ' infinite tada'
    event.target.style.filter = "alpha(opacity=50)";
    event.target.style.opacity = "0.5";
  }


  showTeamsLogo(){

    if (this.props.user.teams) {
      return this.props.user.teams.map((team) =>{
        let borderRight = this.props.videos.selectedTeam.name === team.name ? "4px solid red" : "none";
        return (
          <Team key={team.name} style={{borderRight, boxSizing: "content-box"}}>
            <img className='animated' onClick={this.props.chooseTeam.bind(null, team)} onDoubleClick={this.clickForRemove.bind(this)} src={team.logo} alt={team.name} id={team.name} key={team.name} style={{maxHeight: '80%', maxWidth: "100%"}}/>
          </Team>
        )
      })
    }
  }


  render () {


    return (
      <Wrapper>
        <TeamsWrapper>
          <TeamsContainer>
            {this.showTeamsLogo()}
          </TeamsContainer>
          <Span onClick={()=> {this.props.history.push('/team')}} className="fa fa-plus-square-o fa-3x" aria-hidden="true"></Span>
        </TeamsWrapper>
        <LogoutContainer>
          <Logout history={this.props.history}/>
        </LogoutContainer>
    </Wrapper>
    )
  }
}

function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}


const Wrapper = styled.div`
  width: 6%;
  maxHeight: 100vh;
  border-right: 1px solid red;
  margin: 2% auto;
  display: flex;
  flexDirection: column;
  align-items: center;
  justifyContent: space-between;
`

const TeamsWrapper = styled.div`
  width:100%;
  maxHeight: 100%;
  display: flex;
  flexDirection: column;
  align-items: center;
  justifyContent: space-between;
  margin-left: 5%;
`

const TeamsContainer = styled.div`
  display: flex;
  maxHeight: 95vh;
  overflow-y: auto;
  flexDirection: column;
  margin: auto;
`

const Team = styled.div`
  width: 50px;
  height: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  padding-right: 5%;
`
const Span = styled.span`
  color: rgb(4, 4, 35);
  margin-right: 5%;
  margin-top: 20%;
  `

  const LogoutContainer = styled.div`
    maxHeight: 5vh;
    width: 60%;
    text-align: center;
    color:rgb(226, 9, 103);
    paddingTop: .5em;
    margin-top: 0.5em;
    border-top: 1px solid rgb(226, 9, 103);
  `

export default connect(mapStateToProps, mapDispachToProps)(LateralBar);
