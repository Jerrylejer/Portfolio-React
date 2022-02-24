import React from 'react';
import Header from '../../components/Header/Header';
import './creations.scss';

const Creations = () => {
    return (
        <div>
            <Header />
            <p className='creations'>( -; En construction ;- )</p>
        </div>
    );
};

export default React.memo(Creations);
