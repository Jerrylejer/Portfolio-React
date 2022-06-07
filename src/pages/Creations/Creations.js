import React from 'react';
import Header from '../../components/Header/Header';
import ReactTooltip from 'react-tooltip';
import dyl from '../../assets/image/dyl.png';
import './creations.scss';

const Creations = () => {
    return (
        <div>
            <Header />
            <div className='projects'>
                <div className='projects__link'>
                    <a
                        href='https://documentyourlife-dyl.web.app/'
                        className='dyl'
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
                <p className='projects-dyl'>
                    Projet mené en groupe de 5 développeurs lors de ma formation
                    "Développeur Web et Web-Mobile" au sein de l'école O'Clock.
                    <br />
                    <br />
                    Dans la perspective de redonner du sens à nos journées et
                    plus largement, à notre existence, DYL a été pensé comme un
                    carnet de route numérique personnel dans lequel chaque
                    utilisateur peut illustrer ses journées à l’aide de textes –
                    d’enregistrements vocaux, de photos ou de vidéos.{' '}
                </p>
            </div>
        </div>
    );
};

export default React.memo(Creations);
