import React from 'react';
import ReactPlayer from "react-player"


function OrganizadordeV(props) {
  return (
    <div>
      {props.videos.map((video) => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <ReactPlayer>
          <iframe    
          width="100%" 
          height="100%" 
          src={video.embedUrl} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; 
          autoplay; 
          clipboard-write; 
          encrypted-media; 
          gyroscope; 
          picture-in-picture; 
          web-share"allowfullscreen></iframe>
            </ReactPlayer> 
        </div>
      ))}
    </div>
  );
}

export default OrganizadordeV;
 