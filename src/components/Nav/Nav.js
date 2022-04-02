import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import './navresponsive.scss';

const Nav = () => {
    return (
        <div className='navigation'>
            <nav className='navigation-nav'>
                <Link className='navigation-nav-items-1' to='/'>
                    Jérôme Richard
                </Link>
                <Link className='navigation-nav-items-2' to='/Competences'>
                    Skills
                </Link>
                <Link className='navigation-nav-items-3' to='/Creations'>
                    Créations
                </Link>
                <Link className='navigation-nav-items-4' to='/ViePro'>
                    Mon CV
                </Link>
                <Link className='navigation-nav-items-5' to='/Contacts'>
                    Contacts
                </Link>
            </nav>
        </div>
    );
};

export default React.memo(Nav);
