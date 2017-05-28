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
