import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
    return (
        <div className="navigation">
            <nav className="navigation-nav">
                <NavLink className="navigation-nav-items" to="/">
                Jérôme Richard
                </NavLink>
                <NavLink className="navigation-nav-items" to="/Competences">
                Compétences
                </NavLink>
                <NavLink className="navigation-nav-items" to="/Creations">
                Créations
                </NavLink>
                <NavLink className="navigation-nav-items" to="/ViePro">
                Vie pro
                </NavLink>
                <NavLink className="navigation-nav-items" to="/Contacts">
                Contacts
                </NavLink>
            </nav>
        </div>
    );
};

export default React.memo(Nav);