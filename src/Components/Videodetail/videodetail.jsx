import React from 'react'

 const VideoDetail=({video})=> {
  if(!video){
    return(
      <div></div>
    )
  }

  return (
    <div>
      <div className='ui embed'>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.id.videoId}`}/>
      </div>
      <div className="ui inverted stacked segment" bis_skin_checked="1">
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      <div className="ui inverted divider" bis_skin_checked="1"></div>
    </div>
  )
}

export default VideoDetail;