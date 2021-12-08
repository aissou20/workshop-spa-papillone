import React, {useEffect} from "react";
//import "../style.css"; 
import "../../assets/css/views/Composition/composition.css"
import planteDroite from "../../assets/svg/feuillage-compo-d.svg"
import planteGauche from "../../assets/svg/feuilletes-gauche.svg";
import ellipse from "../../assets/svg/Ellipse 32.svg";
import papillone from "../../assets/accueil/papillone-PACK 2@1.png";


function Composition() {


    return (
        <div className="container-composition">
            <h1 className="title-composition"> Sa composition</h1>

            <div className="page-composition ">
                <div className="block-1-composition col scroll-element js-scroll fade-in-bottom">
                    <p className="text-content-composition">
                        <br/><span className="green">• </span><br/><br/>Des larmes de <b>Pistachier Lentisque</b>.
                        <br/><br/><span className="green">• </span><br/><br/>Des fleurs de <b>Trèfle rouge</b> associées
                        à un peptide breveté.
                        <br/><br/><span className="green">• </span><br/><br/>De la légendaire <b>huile de ricin</b>.
                        <br/><br/><span className="green">• </span>
                    </p>
                </div>

                <div className="block-2-composition background-stick-compo">
           <span className="stick-comp">
                <img
                    src={papillone}
                    alt="Papillone"
                />
              </span>

                    <span className="ellipse-comp">
                <img
                    src={ellipse}
                    alt="Ellipse"
                />
              </span>
                </div>


                <div className="block-3-composition col scroll-element js-scroll fade-in-bottom">
                    <p className="text-content-composition">
                        <br/><br/><span className="green">• </span><br/><br/>Des feuilles d'<b>eucalyptus</b> Un "Smile
                        Active" <br/>
                        <br/>En plus de ses vertus <b>stimulantes</b> et <b>régénérantes</b>,
                        il parait que les énergies négatives disparaissent quand on brûle une feuille d'eucalyptus ;)
                        <br/><br/><span className="green">• </span><br/>
                    </p>

                </div>
            </div>

            <button type="button" className={"button-buy"}>
                    <span className="text-button">
                        <a href="https://www.labellevie.com/categorie/2523/les-yeux"> Acheter</a>
                    </span>
            </button>

            <div className="page-bottom">
                <div className="feuillage-comp-gauche">
            <span className="plante-gauche">
              <img src={planteGauche} alt="plante"/>
            </span>

                </div>
                <div className="feuillage-comp-droite scroll-element js-scroll fade-in-bottom">
            <span className="plante-droite">
              <img src={planteDroite} alt="plante"/>
            </span>
                </div>
            </div>
        </div>
    )
}

export default Composition;
