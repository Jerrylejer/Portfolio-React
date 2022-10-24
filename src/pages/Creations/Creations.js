import React from 'react';
import Header from '../../components/Header/Header';
import ReactTooltip from 'react-tooltip';
import dyl from '../../assets/image/dyl.png';
import Felix from '../../assets/image/siteFelix.png';
import Creuse from '../../assets/image/siteMaisonCreuse.png';
import './creations.scss';

const Creations = () => {
    return (
        <div>
            <Header />
            <div className='projects'>
                <div className='projects__link'>
                    <a
                        href='https://documentyourlife-dyl.web.app/'
                        className='link'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={dyl}
                            className='logo-dyl'
                            alt='Dyl'
                            data-tip='Lien projet - nouvelle fenêtre'
                            data-place='right'
                        />
                    </a>
                    <ReactTooltip delayHide={200} effect='solid' />
                </div>
                <p className='projects-texte'>
                    Projet <strong>ReactJs</strong> mené en groupe de 5 développeurs lors de ma formation
                    "Développeur Web et Web-Mobile" au sein de l'école O'Clock.
                    <br />
                    <p className="projects-texte--sub">
                    Dans la perspective de redonner du sens à nos journées et
                    plus largement, à notre existence, DYL a été pensé comme un
                    carnet de route numérique personnel dans lequel chaque
                    utilisateur peut illustrer ses journées à l’aide de textes –
                    d’enregistrements vocaux, de photos ou de vidéos.{' '}
                    </p>
                </p>
                <div className='projects__link'>
                    <a
                        href='https://la-maison-d-odile.web.app/'
                        className='link'
                        style={{ marginTop: '2rem' }}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={Creuse}
                            style={{ height: '150px' }}
                            alt='Felix'
                            data-tip='Lien projet - nouvelle fenêtre'
                            data-place='right'
                        />
                    </a>
                    <ReactTooltip delayHide={200} effect='solid' />
                </div>
                <hr />
                <p className='projects-texte'>
                    Site <strong>ReactJs</strong> dédié à la location d'une maison de famille
                    située en Creuse. J'aimerais à terme pourvoir y intégrer un
                    moteur de réservation et y inclure une possibilité de
                    paiement type Stripe.
                    <br />
                    <p className='projects-texte--sub'>
                    Features mises en place et fonctionnelles :
                    </p>
                    <ul className='projects-list'>    
                        <li>Envoi d'email via <strong>Emailjs</strong></li>
                        <li>Page météo avec l'API <strong>OpenWeather</strong></li>
                        <li>Page de géolocalisation avec l'API <strong>Google Map</strong></li>
                        <li>Page slide photos avec le package npm <strong>Swiper</strong></li>
                        <li>Calendrier implémenté via le package npm <strong>reactjs-availability-calendar</strong></li>
                    </ul>
                    <p className='projects-texte--sub'>
                    <i>Le site est en développement et non finalisé</i>
                    </p>
                    <br />
                </p>
                <div className='projects__link'>
                    <a
                        href='https://portfolio-felix-richard.web.app/'
                        className='link'
                        style={{ marginTop: '2rem' }}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={Felix}
                            style={{ height: '200px' }}
                            alt='Felix'
                            data-tip='Lien projet - nouvelle fenêtre'
                            data-place='right'
                        />
                    </a>
                    <ReactTooltip delayHide={200} effect='solid' />
                </div>
                <p className='projects-texte'>
                    Petit site en <strong>ReactJs</strong> afin d'aider mon fils à trouver sa
                    semaine de stage exigée en cours de classe de 3ème.
                    <br />
                    <p className='projects-texte--sub'>
                    Rien d'extraordinaire mais il pourra me demander des
                    compléments et son site évoluera !
                    </p>
                </p>
            </div>
        </div>
    );
};

export default React.memo(Creations);
