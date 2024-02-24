import React from 'react';
import './contact.css';
import contact from '../../assets/contact.svg'
import phone from '../../assets/tel.svg'
import mail from '../../assets/mail.svg'
// import LinkedInIcon from "../../assets/facebook-icon.png";

const Contact = () => {
  return (
    <section className="contactPage">
        <div id="contact">
          <img src={contact} alt='contact' className='contact-image'/>
            <div className='contact-content'>
              <h2 className="contactPageTitle">Restons en contact</h2>
              <div className="contact-description">
                <span><img src={phone} alt='phone'/>07 82 61 48 14</span>
                <span><img src={mail} alt='mail'/>jade.buffy@hotmail.fr</span>
              </div>
            </div>
            
            {/* <form action="" className="contactForm">
                <input type="text" className="name" placeholder='Votre nom'/>
                <input type="email" className="email" placeholder='Votre adresse mail'/>
                <textarea className='msg' name="message" rows="5" placeholder='Votre message...'></textarea>
                <button type='submit' value='Send' className="submitBtn">Envoyer</button>
                <div className="links">
                    <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                </div>
            </form> */}
        </div>
    </section>
  )
}

export default Contact