import React from 'react';
import Header from '../../components/Header/Header';
import './viepro.scss';

const Viepro = () => {
    return (
        <div>
            <Header />
            <p className='viePro'>( -; En construction ;- )</p>
        </div>
    );
};

export default React.memo(Viepro);
