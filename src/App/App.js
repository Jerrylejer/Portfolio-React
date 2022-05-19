import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import NavBurger from '../components/NavBurger/NavBurger';
import Home from '../pages/Home/Home';
import Skills from '../pages/Skills/Skills';
import Creations from '../pages/Creations/Creations';
import MonCv from '../pages/MonCv/MonCv';
import Contacts from '../pages/Contacts/Contacts';
import Page404 from '../pages/Page404/Page404';
import Footer from '../components/Footer/Footer';
import CurtainModal from '../components/CurtainModal/CurtainModal';
import './app.scss';
import '../../src/index.scss';
import soleil from '../assets/image/soleil.png';
import lune from '../assets/image/lune.png';
import ReactTooltip from 'react-tooltip';

function App() {
    //* Mise en place du chargeur de thèmes
    // useState pour l'état du thème dark ou light
    const [dark, setDark] = useState(false);
    // Mise en variable du body
    const bodyColor = document.body;
    // Fonction au click qui change le state thème en true ou false
    const toggleDark = () => {
        if (dark === true) {
            setDark(false);
            //todo il y a forcément plus simple avec le toggle
            bodyColor.classList.remove('dark');
            bodyColor.classList.add('light');
        } else {
            setDark(true);
            bodyColor.classList.remove('light');
            bodyColor.classList.add('dark');
        }
    };
    // Changement de l'intitulé du bouton
    const themes = dark ? (
        <img src={soleil} className='soleil' alt='soleil' data-tip="MODE JOUR" data-place="left" data-background-color="yellow" data-text-color="dark"/>
    ) : (
        <img src={lune} className='lune' alt='lune' data-tip="MODE NUIT" data-place="left" />
    );

    return (
        <div className='app'>
            <CurtainModal />
            <Nav />
            <NavBurger />
            <div className='btn'>
                <div onClick={toggleDark} className='btn'>
                    {themes}
                </div>
                <ReactTooltip delayHide={200} effect="solid"/>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Competences' element={<Skills />} />
                <Route path='/Creations' element={<Creations />} />
                <Route path='/ViePro' element={<MonCv />} />
                <Route path='/Contacts' element={<Contacts />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
