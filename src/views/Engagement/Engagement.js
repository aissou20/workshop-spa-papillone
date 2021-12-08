import React, {useEffect} from "react";
//import "../style.css"; 
import "../../assets/css/views/Engagement/engagement.css"
import feuilleDroite from "../../assets/svg/feuillette-eng-d.svg";
import feuilleGauche from "../../assets/svg/feuillette-eng-g.svg";
import ellipse from "../../assets/svg/Ellipse 32.svg";
import papillone from "../../assets/accueil/papillone-PACK 2@1.png";


function Engagement() {

    return (
        <div className="container-engagement">


            <div className="page-engagements">

                <div className={"page-block"}>
                    <div className={"bloc-1"}>
                        <div className="feuillage-eng-gauche scroll-element js-scroll fade-in-bottom">
                            <span className="feuille-eng-gauche"> <img src={feuilleGauche} alt="plante"/></span>
                        </div>
                        <div className="block-1-engagement col scroll-element js-scroll fade-in-top">

                            <p className="text-content-engagement">
                                <span className="texte-gras">Fabriqué en France</span><br/>
                                Papillone favorise l'économie du pays
                                et le <b>savoir-faire français</b>, que pour
                                la sécurité des produits.<br/>
                                <br/><span className="green">• </span><br/>
                                <br/><span className="texte-gras">Une démarche éco- friendly </span>
                                Un mascara avec un faible
                                impact sur la planète.
                                Nos packs sont <b>100% recyclables</b> <br/>
                                <br/><span className="green">• </span><br/>
                                <br/><span className="texte-gras">Des formules naturelles </span>
                                99,6% d’ingrédients d’<b>origine naturelle</b>
                            </p>
                        </div>

                    </div>

                    <div className={"bloc-2"}>
                        <h1 className="title-engagement"> Nos engagements</h1>
                        <div className="block-2-engagement eng-stick">
                         <span className="stick-eng">
                <img
                    src={papillone}
                    alt="Papillone"
                />
              </span>
                            <span className="ellipse-eng">
                <img
                    src={ellipse}
                    alt="Ellipse"
                />
              </span>
                        </div>
                        <span className="button-buy-engagement">

              <button type="button">  <span className="text-button-engagement"><a
                  href="https://www.labellevie.com/categorie/2523/les-yeux"> Buy</a></span></button>
          </span>
                    </div>

                    <div className={"bloc-3"}>
                        <div className="feuillage-eng-droite">
                            <span className="feuille-eng-droite"> <img src={feuilleDroite} alt="plante"/></span>
                        </div>
                        <div className="block-3-engagement col scroll-element js-scroll fade-in-top">
                            <p className="text-content-engagement">
                                <span className="texte-gras">Une action soin efficace</span><br/>
                                Le mascara papillone c’est aussi un soin efficace dont <b>les formules sont brevetées</b>
                                <br/>
                                afin d’offrir à vos yeux le papillonement qu’ils méritent !
                                <br/><br/><span className="green">• </span><br/><br/>
                                <span className="texte-gras"> Dans le respect des animaux </span>
                                Papillone, c'est du maquillage vegan.
                                Nous n'utilisons aucun ingrédient d'origine
                                animale dans nos formules.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Engagement;
