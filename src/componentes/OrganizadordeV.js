import React from 'react';


function OrganizadordeV(props) {
  return (
    <div>
      {props.videos.map((video) => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <iframe
            width="560"
            height="315"
            src={video.embedUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default OrganizadordeV;
 