export function selectActiveVideo(video){
  return {
    type: "SELECT_ACTIVE_VIDEO",
    payload: video
  }
}

export function nextMenuVideos(){
  return {
    type: "NEXT_VIDEOS"
  }
}

export function previousMenuVideos(){
  return {
    type: "PREVIOUS_VIDEOS"
  }
}

export function mouseOverBackground(){
  return {
    type: 'MOUSE_OVER_BACKGROUND'
  }
}

export function restoreBackground(){
  return {
    type: 'RESTORE_BACKGROUND'
  }
}
