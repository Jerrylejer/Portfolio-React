import React from 'react';
import avatar from '../../assets/image/avatarCostume.png';
import avatarBis from '../../assets/image/avatarBis.png';
import avatarRevolver from '../../assets/image/avatarRevolver.png';
import './photo.scss';
import './photoresponsive.scss';

const Photo = () => {
    return (
        <div>
            <div>
                <img src={avatar} alt="Jérôme" className="moi2"/>
                <img src={avatarRevolver} alt="Jérôme" className="moi"/>
                <img src={avatarBis} alt="Jérôme" className="moi3"/>
            </div>
        </div>
    );
};

export default Photo;