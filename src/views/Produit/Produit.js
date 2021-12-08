import React from "react";
//import "../style.css"; 
import "../../assets/css/views/Produit/produit.css";
import ellipse from "../../assets/svg/Ellipse 32.svg";
import papillone from "../../assets/accueil/papillone-PACK 2@1.png";
import { Link } from "react-scroll";




function Produit(){

    return(
      <div className="container-produit">
          <div className="block-1 col">
              <h1> Un mascara pas comme les autres...</h1>
              <span className="text-content">
              Ce merveilleux mascara a tout bon. <b>Une formule green</b> composée à 99,6% d’ingrédients <b>d’origine naturelle</b>,
              notée 100% sur Yuka.
              Et un vrai côté <b>eco-freindly </b>: sa brosse est en plastique d’origine végétale,
              le tout <b>100% recyclable</b>.
            </span>
              <button className="btn btn-engagement"> <span className="btn-text"> <Link
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              >
                voir nos engagements
              </Link></span></button>
          </div>

          <div className="block-2 background-stick">

              <span className="stick-prod">
                <img
                    src={papillone}
                    alt="Papillone"
                />
              </span>

              <span className="ellipse-prod" >
                <img
                    src={ellipse}
                    alt="Ellipse"
                />
              </span>

          </div>

          <div className="block-3 col" >
            <span className="text-content">
            <b>Le plus :</b> Sa formule unique sans compromis, clean, naturelle, vegan et ses actifs fortifiants et boosters testés cliniquement.<br/>

              <br/><b>Le résultat :</b> des cils plus longs, forts, et volumineux.<br/>

              <br/><b>Le tip :</b> pour un effet naturel, misez sur un passage. Pour un effet waouh, repassez une seconde fois sur vos cils.
            </span>
              <button className="btn btn-composition"> <span className="btn-text"><Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              >
                voir la composition
              </Link></span></button>
          </div>
        <div className="produit page-produit">

        </div>
      </div>

    )
}
export default Produit;
