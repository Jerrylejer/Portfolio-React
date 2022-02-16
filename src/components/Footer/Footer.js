import React from 'react';
import github from '../../assets/image/github.png';
import linkedn from '../../assets/image/linkedn.png';
import twitter from '../../assets/image/twitter.png';
import './footer.scss';

const Footer = () => {

    return (
        <div className="footer">
            <a href="https://github.com/Jerrylejer?tab=repositories" className="footer-git"><img src={github} alt="Github"/></a>
            <a href="https://linkedin.com/in/jérôme-richard-4ab2bb86" className="footer-linkedn"><img src={linkedn} alt="linkedn"/></a>
            <a href="https://twitter.com/JeromeLejer" className="footer-twitter"><img src={twitter} alt="twitter"/></a>
        </div>
    );
};

export default React.memo(Footer);