import React from 'react';
import "../estilos/BarraRedes.css";
import { Nav, Navbar } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSpotify } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import sound from '../sonidos/off-click.mp3';



function BarraRedes() {
  
  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  }
  return (
    <Navbar id="redes" bg="ligh" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column justify-content-end ml-auto " >
          <Nav.Link href="https://www.facebook.com/MundialistaCrew" target="_blank" onMouseEnter={playSound}><i className='logo'><FaFacebook /></i></Nav.Link>
          <Nav.Link href="https://www.instagram.com/mundialistacrew/" target="_blank" onMouseEnter={playSound}><i className= "logo"><AiFillInstagram /></i></Nav.Link>
          <Nav.Link href="https://open.spotify.com/artist/6EcQO0oH1Bk27HMRlRNwYv" target="_blank" onMouseEnter={playSound}><i className= "logo"> <FaSpotify /></i></Nav.Link>
          <Nav.Link href="https://www.youtube.com/@MundialistaCrew" target="_blank" onMouseEnter={playSound}><i className= "logo"><FaYoutube /></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BarraRedes;
