import React from 'react';
import './skills.css';
import creativite from '../../assets/creativite.svg';
import patience from '../../assets/patience.svg';
import team from '../../assets/team.svg';
import energy from '../../assets/dynamisme.svg';

const Skills = () => {
  return (
    <section id="skills">
        <h2 className="skillTitle">Faisons connaissance !</h2>
        <span className="skillDescription">J'ai 21 ans et je suis en 3ème (et dernière !) année de BUT MMI (Métiers du Multimédia et de l'Internet) à Chambéry. 
        Ce qui me botte c'est la création graphique et coder pendant des heures. J'arrive à la fin de mon cursus mais ça n'a pas étenché ma soif d'apprendre ! On est jamais assez formé pas vrai ?</span>
        <span>Pour moi, la création a débuté depuis très jeune, et elle continue de rythmer mon quotidien encore aujourd'hui. Peu importe le domaine. Mélanger de la curiosité et l'envie de créer et PAF me voià, moi et mes nombreux hobbies. 
        Eh oui, la création n'a pas de limite, hormi celles qu'on s'impose à nous même ! Enfin, pas besoin d'en dire plus, vous pouvez découvrir toutes mes réalisations plus bas. J'espère que ma patte vous plaira !</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={creativite} alt="Ampoule éclairée" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>Le cerveau à l'affût !</h3>
                </div>
            </div>
            <div className="skillBar">
                <img src={patience} alt="Webdesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>La patience, ça me connait</h3>
                </div>
            </div>
            <div className="skillBar">
                <img src={team} alt="Appdesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>Toute seule, c'est bien <br/>Ensemble c'est mieux</h3>
                </div>
            </div>
            <div className="skillBar">
                <img src={energy} alt="Appdesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h3>Jamais fatiguée !</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills