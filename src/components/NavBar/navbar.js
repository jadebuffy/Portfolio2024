import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import contactImg from '../../assets/chat.svg';
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="Mon logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Accueil</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-20} duration={500} className="desktopMenuListItem">En apprendre plus</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projets</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior : 'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />
            Contactez moi
        </button>
        <img src={menu} alt="Menu" className='mobMenu' onClick={() =>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Accueil</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-20} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Compétences</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projets</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar