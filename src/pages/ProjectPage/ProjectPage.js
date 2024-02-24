import React from 'react';
import './ProjectPages.css';
import Navbar from '../../components/NavBar/navbar';
import flecheretour from "../../assets/flechegauche.webp";
//import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const ProjectPage = () => {
  return (
    <section>
      <Navbar/>
      <div className='headProject'>
        <HashLink to="/#works" smooth={true}>
          <img src={flecheretour} alt='flèche retour' className='flecheretour'/>
        </HashLink>
        <div className='titles'>
          <h1>Morin Coaching</h1>
          <div className='categories'>
            <h2>Webdesign</h2>
            <h2>Développement No Code</h2>
          </div>
        </div>
      </div>
      <div>
        <img src='' alt=''/>
        <h3>Description</h3>
        <p>texte de description</p>
      </div>
      <div>
        <div>
          <h3>Compétences</h3>
          <ul>
            <li>Compétence1</li>
            <li>Compétence2</li>
            <li>Compétence3</li>
          </ul>
        </div>
        <div>
          <h3>Outils</h3>
          <div>
            <img src='' alt=''/>
            <img src='' alt=''/>
            <img src='' alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage;