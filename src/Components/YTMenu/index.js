import React from 'react'
import styled from 'styled-components'

import actionCreators from '../../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class YTMenu extends React.Component {

  renderVideos(){
    let menuCounter = this.props.videos.menuCounter;
    return this.props.videos.list.slice(menuCounter, menuCounter + 5).map((video, index)=>{
      let thumbnail = video.snippet.thumbnails.medium.url
      return (
        <Thumbnail
          selectActiveVideo={this.props.selectActiveVideo}
          video={video}
          thumbnail={thumbnail}
          key={index}>
        </Thumbnail>
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
  flex-basis: 20%;
  height: auto;
  flex-shrink:6;
  background: linear-gradient(${(props) => props.gradient}, ${(props) => props.gradient}), url(${(props) => props.thumbnail });
  background-size: 100% 100%;
  opacity: 1;
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



class Thumbnail extends React.Component {

  constructor(){
    super()
    this.state = {hover: false}
    this.styleOnHover = this.styleOnHover.bind(this)
    this.mouseOver = this.mouseOver.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }

  mouseOver(){
    this.setState({hover: true})
  }

  mouseLeave(){
    this.setState({hover: false})
  }

  styleOnHover(){

    if (this.state.hover === false) {
      let colorsGradient = ['rgba(66,39,90, 0.3)', 'rgba(115,75,109, 0.3)', 'rgba(20,30,48, 0.3)', 'rgba(20,30,48, 0.3)',
      'rgba(233,100,67, 0.3)', 'rgba(144,78,149, 0.3)', 'rgba(168,0,119, 0.3)', 'rgba(102,255,0, 0.3)']
      let randomColorIndex = Math.floor(Math.random() * 7 ) + 1
      this.gradient = colorsGradient[randomColorIndex]
    } else {
      this.gradient = 'rgba(255, 255, 255, 0)'
    }
  }

  render () {

    this.styleOnHover()

    return(
      <ImgWrapper
        gradient={this.gradient}
        onClick={this.props.selectActiveVideo.bind(null, this.props.video)}
        onMouseOver={this.mouseOver}
        onMouseLeave={this.mouseLeave}
        thumbnail={this.props.thumbnail}
        />
    )
  }
}


function mapStateToProps(state){
  return state
}


function mapDispachToProps(dispatch){
  return bindActionCreators({ ...actionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(YTMenu);
