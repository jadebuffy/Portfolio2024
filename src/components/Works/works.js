import React, { useState }  from 'react';
import './works.css';
import plus from "../../assets/plus.svg"
import moins from "../../assets/moins.svg"
import Portfolio1 from "../../assets/morin.jpg"
import Portfolio2 from "../../assets/sanglard.jpg"
import Portfolio3 from "../../assets/bouteille2.jpg"
import Portfolio4 from "../../assets/57926.jpg"
import Portfolio5 from "../../assets/piste.jpg"
import Portfolio6 from "../../assets/chgr.webp"
import Portfolio7 from "../../assets/mockupdeezer.webp"
import Portfolio8 from "../../assets/miel.webp"
import Portfolio9 from "../../assets/wordpress.webp"
import Portfolio10 from "../../assets/57926.jpg"
import Portfolio11 from "../../assets/piste.jpg"
import Portfolio12 from "../../assets/mbab.jpg"
import { Link } from 'react-router-dom';
//import ProjectPage from '../ProjectPage/ProjectPage';

const Works = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section id="works">
        <h2 className="worksTitle">Découvrez mes projets</h2>
        <span className="worksDescription">Mes projets s'articule autour de plusieurs thématiques, design éditorial, graphique, webdesign, zoning, développement et motion design. Mes projets ont été réalisé dans plusieurs cadres, notamment dans le cadre de projet étudiant, professionnel lors de mon stage et mon alternance, et dans le cadre de projet personnel. </span>
        <div className="worksImgs">
            <Link to="/project">
              <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
            </Link>
            <a href='work1.js'>
              <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
            </a>
            <a href='work1.js'>
              <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
            </a>
            <a href='work1.js'>
              <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
            </a>
            <a href='work1.js'>
              <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
            </a>
            <a href='work1.js'>
              <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
            </a>
        </div>
        <div id="worksblock" style={{ display: isVisible ? 'none' : 'flex' }}>
        <a href='work1.js'>
              <img src={Portfolio7} alt="Portfolio1" className="worksImg" />
            </a>
            <a href='work1.js'>
              <img src={Portfolio8} alt="Portfolio2" className="worksImg" />
            </a>
            <a href='work1.js'>
              <img src={Portfolio9} alt="Portfolio3" className="worksImg" />
            </a>
            <a href='work1.js'>
              <img src={Portfolio10} alt="Portfolio4" className="worksImg" />
            </a>
            <a href='work1.js'>
              <img src={Portfolio11} alt="Portfolio5" className="worksImg" />
            </a>
            <a href='work1.js'>
              <img src={Portfolio12} alt="Portfolio6" className="worksImg" />
            </a>
        </div>
        <button className="worksBtn" onClick={toggleVisibility}>
            {isVisible ? 
              <><img src={plus} alt="Voir plus" className='btnPlus'/> Voir plus</> :
              <><img src={moins} alt="Voir moins" className='btnPlus'/> Voir moins</>              
            }
        </button>
    </section>
  )
}

export default Works