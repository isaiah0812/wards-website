import React from 'react';
import Video from '../models/video';

export default function WardVideo(video: Video): JSX.Element {
  return (
    <div style={{ margin: '2%' }}>
      <h1>{video.name}</h1>
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingTop: '56.25%'
      }}>
        <iframe 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
          }}
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.name}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>
    </div>
  )
}