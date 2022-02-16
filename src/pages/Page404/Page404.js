import React from 'react';
import Header from '../../components/Header/Header';
import './page404.scss'

const Page404 = () => {
    return (
        <div>
        <Header />
            <div className="page404">404 ! Wrong Way !</div>
        </div>
    );
};

export default React.memo(Page404);