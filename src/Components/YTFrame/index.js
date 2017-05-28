import React from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'

import actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class YTFrame extends React.Component {

  _onPlay(){
    this.refs.playerContainer.style.boxShadow = '0 0 100px 800px rgba(0, 0, 0, 0.9)'
    this.refs.playerContainer.style.zIndex = 1000
  }

  _onPause(){
    this.refs.playerContainer.style.boxShadow = '0 0 0 0'
    this.refs.playerContainer.style.zIndex = 0
  }

  render() {
    const opts = {
      height: '500',
      width: '780',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 1
      }
    };

    return (
      <Wrapper>
        <div ref="playerContainer">
          <YouTube
            videoId={this.props.videoId}
            opts={opts}
            onReady={this._onReady}
            onPlay={this._onPlay.bind(this)}
            onPause={this._onPause.bind(this)}
          />
        </div>
      </Wrapper>

    );
  }
}

const Wrapper = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`


  function mapStateToProps(state){
    return state
  }


  function mapDispachToProps(dispatch){
    return bindActionCreators({ ...actionCreators}, dispatch)
  }

  export default connect(mapStateToProps, mapDispachToProps)(YTFrame);
