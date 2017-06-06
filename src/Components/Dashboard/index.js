import React from 'react'
import styled from 'styled-components'

import VideoSection from '../VideoSection'
import LateralBar from '../LateralBar'

import actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import apiService from '../../utils/apiService'



class Dashboard extends React.Component {


  componentWillMount(){
    let token = localStorage.getItem('token')
    apiService.sendToken(token)
    .then(function (response) {
      let user = response.data.user
      this.props.authUser(user)
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidUpdate(){
    if (!(localStorage.getItem('token'))) {
      this.props.history.push('/login')
    }
  }


  render () {

    return (
      <Wrapper>
        <LateralBar history={this.props.history} />
        <VideoSection user={this.user}/>
      </Wrapper>
    )
  }
}


const Wrapper = styled.div`
  width: 100%
  height: 100vh;
  display: flex;
`


function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}


export default connect(mapStateToProps, mapDispachToProps)(Dashboard);
