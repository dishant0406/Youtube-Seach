import React from 'react'

export default function VideoItem({title,video,imgsrc, onVideoSelect}) {
  return (
    
      <div onClick={()=>onVideoSelect(video)} className="item" bis_skin_checked="1">
        <div className="ui image" bis_skin_checked="1">
          <img src={imgsrc} alt={title} />
        </div>
        <div className="middle aligned content" bis_skin_checked="1">
              <a href='#' className="header" style={{color: '#fff', fontSize:'1rem'}}>{title}</a>
        </div>
      </div>
    
  )
}
