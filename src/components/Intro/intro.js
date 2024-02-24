import React from 'react';
import './intro.css';
import bg from '../../assets/perso.svg';
import btnImg from '../../assets/fleche.svg';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <h1 className="hello">Bonjour,</h1>
            <h2 className="introText">Moi, c'est <span className="introName">Jade !</span> <br/> Bienvenue sur mon portfolio</h2>
            <p className="introPara">Créative et motivée, grâce à mes compétences je suis polyvalente <br/>dans les métiers de la création digitale</p>
            <Link to='skills' smooth={true} offset={-50} duration={500}><button className="btn">En apprendre plus<img src={btnImg} alt="en apprendre plus" className='btnImg'/></button></Link>
        </div>
        <img src={bg} alt="Profil" className="bg" />
    </section>
  )
}

export default Intro