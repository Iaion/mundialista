import React from 'react';
import Organizador from './OrganizadordeV';
import "../estilos/Organizador.css";

function Cypher() {
  // Arreglo de objetos de videos
  const videos = [
    {
      id: 1,
      title: '01',
      embedUrl: 'https://youtu.be/yuRbCEDhADE',
    },
    {
      id: 2,
      title: '02',
      embedUrl: 'https://www.youtube.com/watch?v=MM1jiNh-55g',
    },
    {
      id: 3,
      title: '03',
      embedUrl: 'https://www.youtube.com/watch?v=bBtoyxS3lTk',
    },
    {
      id: 4,
      title: '04',
      embedUrl: 'https://www.youtube.com/embed/def456',
    },
    {
      id: 5,
      title: '05',
      embedUrl: 'https://www.youtube.com/watch?v=IU1Hirfq3_I',
    },
    {
      id: 6,
      title: '06',
      embedUrl: 'https://www.youtube.com/watch?v=qzTEXnZZLTI',
    },
    {
      id: 7,
      title: '07',
      embedUrl: 'https://www.youtube.com/watch?v=w8Tv9DDEp4w',
    },
    {
      id: 8,
      title: '08',
      embedUrl: 'https://www.youtube.com/watch?v=c7DNatrOAqg',
    }
    // Agrega más videos aquí...
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', overflow: 'scroll',textAlign: "center" }}>
      <h1>Cyphers</h1>
      <div style={{ width: '60%', maxWidth: '800px' }}>
      <Organizador videos={videos} />
    </div>
    </div>
  );
}



export default Cypher;