import React from 'react';
import Header from '../../components/Header/Header';

const Page404 = () => {
    return (
        <div>
        <Header />
            Fausse route Baby !
        </div>
    );
};

export default React.memo(Page404);