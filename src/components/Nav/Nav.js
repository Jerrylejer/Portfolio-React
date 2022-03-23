import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import './navresponsive.scss';

const Nav = () => {
    return (
        <div className='navigation'>
            <nav className='navigation-nav'>
                <NavLink className='navigation-nav-items-1' to='/'>
                    Jérôme Richard
                </NavLink>
                <NavLink className='navigation-nav-items-2' to='/Competences'>
                    Skills
                </NavLink>
                <NavLink className='navigation-nav-items-3' to='/Creations'>
                    Créations
                </NavLink>
                <NavLink className='navigation-nav-items-4' to='/ViePro'>
                    Mon CV
                </NavLink>
                <NavLink className='navigation-nav-items-5' to='/Contacts'>
                    Contacts
                </NavLink>
            </nav>
        </div>
    );
};

export default React.memo(Nav);
