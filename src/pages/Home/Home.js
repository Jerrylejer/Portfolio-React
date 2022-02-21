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
            <p className="home-text">Le principal de ma carrière s'est déroulé dans le milieu de l'hôtellerie parisienne.
            Passionné par l'univers du web et du code, j'ai décidé ma reconversion professionnelle en 2021. Je suis à aujourd'hui en quête d'un stage, voir mieux de mon premier CDI !</p>
        </div>
    );
};

export default React.memo(Home);