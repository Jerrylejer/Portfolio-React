import React from 'react';
import Header from '../../components/Header/Header';
import react from '../../assets/image/react.png';
import js from '../../assets/image/js.png';
import node from '../../assets/image/node.png';
import css from '../../assets/image/css.png';
import html from '../../assets/image/html.png';
import bootstrap from '../../assets/image/bootstrap.png'
import materialui from '../../assets/image/material-ui.svg'
import gitIcone from '../../assets/image/gitIcone.png';

import './skills.scss';
import './skillsresponsive.scss';

const Skills = () => {
    return (
        <div className="skills">
            <Header />
            <div className="skill-container">
                <a href="https://fr.reactjs.org/" target="_blank" rel="noreferrer" className="link"><img src={react} alt="ReactJs" className="link-react-js-icone"></img></a>
                <a href="https://www.javascript.com/" target="_blank" rel="noreferrer" className="link"><img src={js} alt="Javascript" className="link-js-icone"></img></a>
                <a href="https://nodejs.org/fr/" target="_blank" rel="noreferrer" className="link"><img src={node} alt="NodeJs" className="link-nodejs-icone"></img></a>
                <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" rel="noreferrer" className="link"><img src={css} alt="Css3" className="link-css-icone"></img></a>
                <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" className="link"><img src={bootstrap} alt="Bootstrap" className="link-bootstrap-icone"></img></a>
                <a href="https://mui.com/store/" target="_blank" rel="noreferrer" className="link"><img src={materialui} alt="Material-ui" className="link-materialui-icone"></img></a>
                <a href="https://developer.mozilla.org/fr/docs/orphaned/Web/Guide/HTML/HTML5" target="_blank" rel="noreferrer" className="link"><img src={html} alt="Html5" className="link-html-icone"></img></a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="link"><img src={gitIcone} alt="Git" className="link-git-icone"></img></a>
            </div>
        </div>
    );
};

export default React.memo(Skills);