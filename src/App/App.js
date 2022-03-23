import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Home from '../pages/Home/Home';
import Skills from '../pages/Skills/Skills';
import Creations from '../pages/Creations/Creations';
import MonCv from '../pages/MonCv/MonCv';
import Contacts from '../pages/Contacts/Contacts';
import Page404 from '../pages/Page404/Page404';
import Footer from '../components/Footer/Footer';
import './app.scss';

function App() {
    return (
        <div className='app'>
            <Nav />
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
