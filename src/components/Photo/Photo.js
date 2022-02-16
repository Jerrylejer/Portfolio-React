import React from 'react';
import avatar from '../../assets/image/avatar.jpg';

const Photo = () => {
    return (
        <div>
            <div>
                <img src={avatar} alt="Jérôme" />
            </div>
        </div>
    );
};

export default Photo;