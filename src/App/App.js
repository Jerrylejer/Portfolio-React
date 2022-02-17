import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Home from '../pages/Home/Home';
import Competences from '../pages/Competences/Competences';
import Creations from '../pages/Creations/Creations';
import Viepro from '../pages/Viepro/Viepro';
import Contacts from '../pages/Contacts/Contacts';
import Page404 from '../pages/Page404/Page404';
import Footer from '../components/Footer/Footer';
import './app.scss';

function App() {
  return (
    <div className="app">
    <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Competences" element={<Competences />} />
          <Route path="/Creations" element={<Creations />} />
          <Route path="/ViePro" element={<Viepro />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
    <Footer />
    </div>
  );
}

export default App;
