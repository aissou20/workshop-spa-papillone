import React from "react";
//import "../style.css";
import "../../assets/css/views/Accueil/accueil.css";
import feuillage from "../../assets/accueil/feuillage.svg";
import feuilleDroite from "../../assets/accueil/feuille-droite.svg";
import papillone from "../../assets/accueil/papillone-PACK 2@1.png";
import ellipse from "../../assets/accueil/Ellipse 32.svg";
import plant from "../../assets/accueil/plant.svg";
import feuilleGauche from "../../assets/accueil/feuille-4.svg";
import PapilloneText from '../../assets/accueil/Papillonetext.png';
import facebook from '../../assets/svg/facebook 1@1.svg';
import instagram from '../../assets/svg/instagram 1@1.svg'


function Accueil() {

    return (
        <div className="container-accueil">
            <div className="feuillage-top">
                <img
                    src={feuillage}
                    alt="le feuillage à droite"
                />
            </div>
            <div className="block-social grid">
                <div className="picto-facebook">
                    <a href="https://www.facebook.com/">
                        <img
                            src={facebook}
                            alt="logo facebook"
                        />
                    </a>

                </div>
                <div className="picto-instagram">
                    <a href="https://www.instagram.com/">
                        <img
                            src={instagram}
                            alt="logo instagram"
                        />
                    </a>

                </div>
            </div>

            <div className="papillone-center">
                <div className="papillone-text">
                    <img src={PapilloneText} alt="Papillone"/>
                </div>

                <div className="papillone-stick">
              <span className="stick">
                <img
                    src={papillone}
                    alt="Papillone"
                />
              </span>

                    <span className="ellipse">
                <img
                    src={ellipse}
                    alt="Ellipse"
                />
              </span>

                </div>


                <div className="img-pack-papillone"></div>
            </div>

            <div className="feuillage-bottom">
                <div className="feuillage-gauche">
              <span className="plant">
                <img
                    src={plant}
                    alt="feuillage-gauche"
                />
              </span>
                    <span className="feuille-gauche">
                <img
                    src={feuilleGauche}
                    alt="feuillage-gauche"
                />
              </span>
                </div>

                <div className="feuillage-droite">
                    <img
                        src={feuilleDroite}
                        alt="le feuillage à droite"
                    />
                </div>
            </div>
        </div>

    )
}

export default Accueil;
