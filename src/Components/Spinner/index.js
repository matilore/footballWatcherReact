import React from 'react'
import styled from 'styled-components'

import actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

var Loader = require('halogen/PulseLoader');

class Spinner extends React.Component {

  render() {

    let isSelectedTeamReady = Object.keys(this.props.selectedTeam).length === 0
    let sentence = isSelectedTeamReady ?
    "Please, select a team from the left" :
    "Now just choose one of the videos below";

    let welcome = this.props.user.email !== undefined ? `Hello ${this.props.user.email}` : undefined

    if (welcome && sentence) {
      return (
        <Wrapper>
          <h1 style={{justifyContent: "center", fontSize: '1.8em'}} className="animated pulse" >{welcome}</h1>
          <h1 style={{margin: '100px', justifyContent: "center", fontSize: '1.8em'}} className="animated pulse" >{sentence}</h1>
          <Loader color="purple" size="25px" margin="10px"/>
        </Wrapper>
      )
    } else {
      return null
    }
  }
};

const Wrapper = styled.div`
  height: 70%;
  display: flex;
  flexDirection: column;
  align-items: center;
  justify-content: center;
`
function mapStateToProps(state){
  return {
    user: state.user,
    selectedTeam: state.videos.selectedTeam,
    selectedVideo: state.videos.selectedVideo
  }
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(Spinner);
