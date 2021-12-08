import React from "react";
import './App.css';
import Accueil from './views/Accueil/Accueil';
import Produit from './views/Produit/Produit';
import Engagement from './views/Engagement/Engagement';
import Contact from './views/Contact/Contact';
import Composition from './views/Composition/Composition';
import Navbar from './components/Navbar/Navbar';
import {Element} from 'react-scroll';
//import {useMediaQuery} from 'react-responsive'


function App() {

    /*const isMobileDevice = useMediaQuery({
        query: "(min-device-width: 480px)",
    });

    const isTabletDevice = useMediaQuery({
        query: "(min-device-width: 768px)",
    });

    const isLaptop = useMediaQuery({
        query: "(min-device-width: 1024px)",
    });

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 1200px)",
    });

    const isBigScreen = useMediaQuery({
        query: "(min-device-width: 1201px )",
    });*/

    return (
        <div className="app-papillone">
            <Navbar/>
            <Element id="section1" name="section1" className="scroll-container">
                <Accueil/>
            </Element>

            <Element id="section2" name="section2" className="scroll-container">
                <Produit/>
            </Element>

            <Element id="section3" name="section3" className="scroll-container">
                <Composition/>
            </Element>

            <Element id="section4" name="section4" className="scroll-container">
                <Engagement/>
            </Element>

            <Element id="section5" name="section5" className="scroll-container">
                <Contact/>
            </Element>

        </div>

    );
}

export default App;
