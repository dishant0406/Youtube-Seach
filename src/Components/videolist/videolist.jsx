import * as React from 'react';
import VideoItem from '../videoitem/videoitem';
import './videolist.css';



const VideosList = ({videos, onVideoSelect})=> {
  
  const mediacardarray = videos.map(el=>{
    return <VideoItem key={el.id.videoId} onVideoSelect={onVideoSelect} title={el.snippet.title} subtitle={el.snippet.channelTitle} imgsrc={el.snippet.thumbnails.default.url} video={el}/>
  })

  return (
    <div className="ui divided items" bis_skin_checked="1">{mediacardarray}</div>
  )
}

export default VideosList;
