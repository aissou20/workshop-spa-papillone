import React, { Component } from "react";
//import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import "../../assets/css/components/Navbar/navbar.css";
//import active from "../../assets/svg/trueactive.svg"

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <a href="#" className="logo" onClick={this.scrollToTop}>Papillone</a>
         
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                className={"section1"}
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                 Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className={"section2"}
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                 Produit
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className={"section3"}
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Composition
              </Link>

            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                className={"section4"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Engagement
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className={"section5"}
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
