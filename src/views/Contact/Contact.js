import React ,{useEffect,useState} from "react";
//import "../style.css"; 
import { Link, animateScroll as scroll } from "react-scroll";
import "../../assets/css/views/Contact/contact.css";
import facebook from "../../assets/svg/facebook 1@1.svg";
import instagram from "../../assets/svg/instagram 1@1.svg";
import twitter from "../../assets/svg/twitter 1@1.svg";
import youtube from "../../assets/svg/youtube 1@1.svg";
import submitPicto from "../../assets/svg/submit.svg";
import ScrollAnimation from 'react-animate-on-scroll';




function Contact(){

  const [prenom , setPrenom] = useState("");
  const [message , setMessage] = useState("");
  const [email , setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Merci ${prenom} nous allons vous recontacter ${message} , ${email}`);
    setPrenom("");
    setMessage("");
    setEmail("");
}

  const scrollToTop = () => {
    scroll.scrollToTop();
  };



    return(
        <div className="section">
          <div className="page-contact">
            <span className="title-contact">Nous contacter</span>
            <div className="form-contact scroll-element js-scroll fade-in">

              <form className=" form-content" onSubmit={handleSubmit}>
                <div className="form-container">
                  <label htmlFor="prenom">Prénom</label>
                  <input type="text" id="prenom" name="prenom" placeholder="" value={prenom}
                    onChange={e => setPrenom(e.target.value)}
                  />

                  <label htmlFor="email"> Email</label>
                  <input type="email" id="email" value={email} name="email" placeholder=""
                    onChange={e => setEmail(e.target.value)}
                  />

                  <label htmlFor="message">Ton message</label>
                  <textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)}>
                  </textarea>
                </div>

                <div className="button-submit">  <button type="submit"> <span className="picto-submit"> <img src={submitPicto} alt="logo bouton envoyer"/> </span>
                </button></div>
              </form>              
            </div>
          <ScrollAnimation animateIn="animate__backInDown">
            <div className="footer-contact scroll-element js-scroll fade-in-top">
                <div className="adresse">
                  <span className="logo-footer scroll-top" onClick={scrollToTop}>Papillone</span>
                  <ul className="contact-infos">
                    <li>20 rue pierre mauroy, 59000 Lille</li>
                    <li>info@papillone.com</li>
                    <li>03 40 50 10 70</li>
                  </ul>
                </div>

                <div className="infos">
                  <h4 className="info"> Infos</h4>
                  <p>
                    <a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F31228"> 
                      Mentions légales
                    </a>
                  </p>
                </div>

                <div className="contact-reseaux">
                  <h4 className="follow">Nous suivre</h4>
                  <ul className="pictos-reseaux">
                    <li><a href="#"><img src={facebook} alt="Facebook" /></a></li>
                    <li><a href="#"><img src={instagram} alt="instagram" /></a></li>
                    <li><a href="#"><img src={twitter} alt="twitter" /></a></li>
                    <li><a href="#"><img src={youtube} alt="youtube" /></a></li>
                  </ul>
                </div>

              </div>
          </ScrollAnimation>

          </div>
        </div>
    )
}
export default Contact;
