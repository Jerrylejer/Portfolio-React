import React from 'react';
import Header from '../../components/Header/Header';
import Photo from '../../components/Photo/Photo';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Photo />
            <h1 className="home-name">Jérôme RICHARD</h1>
            <p className="home-text">Agé de 48 ans, le principal de ma carrière s'est déroulé dans le milieu de l'hôtellerie parisienne.
            Passionné par l'univers web et le code, j'ai sauté le pas de la reconversion professionnelle en 2021 et compte bien
            m'épanouir dans le secteur du web.</p>
        </div>
    );
};

export default React.memo(Home);