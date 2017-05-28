import React from 'react'
import styled from 'styled-components'


import actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class YTMenu extends React.Component {

  renderVideos(){
    let menuCounter = this.props.videos.menuCounter;
    return this.props.videos.list.slice(menuCounter, menuCounter + 5).map((video, index)=>{
      return (
        <ImgWrapper key={index}>
          <img onClick={this.props.selectActiveVideo.bind(null, video)} style={{width: '100%',height: '100%'}} src={video.snippet.thumbnails.medium.url} alt=""/>
        </ImgWrapper>
      )
    })
  }

  render () {
    return (
      <Wrapper id="YTMenu">
        <Button onClick={this.props.previousMenuVideos}><i className="fa fa-angle-double-left fa-3x" aria-hidden="true"></i></Button>
        <VideosWrapper>
          {this.renderVideos()}
        </VideosWrapper>
        <Button onClick={this.props.nextMenuVideos}><i className="fa fa-angle-double-right fa-3x" aria-hidden="true"></i></Button>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 15%
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5%;
`

const VideosWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`

const ImgWrapper = styled.div`
  flex-basis: 20%
  height: auto;
  flex-shrink:6;
`

const Button = styled.button`
  backgroundColor: ${(props) => props.backgroundColor || 'transparent'};
  height: ${(props) => props.height || 'auto'};
  width: 10%;
  border: none;
  outline: none;
  color: ${(props) => props.color || 'black'};
  fontSize: 1em;
  flex-shrink:1
`


function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(YTMenu);
