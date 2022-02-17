import React from 'react';
import avatar from '../../assets/image/avatar.jpg';
import './photo.scss';

const Photo = () => {
    return (
        <div>
            <div>
                <img src={avatar} alt="Jérôme" className="moi"/>
            </div>
        </div>
    );
};

export default Photo;