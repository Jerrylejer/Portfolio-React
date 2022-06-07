import React from 'react';
import ReactTooltip from 'react-tooltip';
import curtains from '../../assets/image/curtains.png';
import './curtainModal.scss';

const CurtainModal = () => {

    // const modalCurtain = document.querySelector('.modal');
    
    // const position = modalCurtain.style.top
    

    return (
        <div className='modal'>
            <img src={curtains} alt='curtains' className='curtain' />
        </div>
    );
};

export default CurtainModal;
