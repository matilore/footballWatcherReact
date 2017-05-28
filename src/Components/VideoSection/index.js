import React from 'react'
import styled from 'styled-components'

import YTFrame from '../YTFrame'
import YTMenu from '../YTMenu'
import Spinner from '../Spinner'


import actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'





class VideoSection extends React.Component {




  render () {
    let videoId = Object.keys(this.props.videos.selectedVideo).length > 0 ? this.props.videos.selectedVideo.id.videoId : undefined

      return (
      <Main id="main">
        {videoId === undefined ? <Spinner /> : <YTFrame videoId={videoId} /> }
        <YTMenu />
      </Main>
    )
  }
}


const Main = styled.div`
  width: 95%;
  height: 100vh;
  display: flex;
  flexDirection: column;
`


function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(VideoSection);
