import React from 'react';
import github from '../../assets/image/github.png';
import linkedn from '../../assets/image/linkedn.png';
import twitter from '../../assets/image/twitter.png';
import './footer.scss';

const Footer = () => {

    return (
        <div className="footer">
            <a href="https://github.com/Jerrylejer?tab=repositories" className="footer-git" target="_blank" rel="noreferrer"><img src={github} alt="Github"/></a>
            <a href="https://linkedin.com/in/jérôme-richard-4ab2bb86" className="footer-linkedn" target="_blank" rel="noreferrer"><img src={linkedn} alt="linkedn"/></a>
            <a href="https://twitter.com/JeromeLejer" className="footer-twitter" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter"/></a>
        </div>
    );
};

export default React.memo(Footer);