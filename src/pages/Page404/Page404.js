import React from 'react';
import './page404.scss'

const Page404 = () => {
    return (
        <div>
            <div className="page404-wrapper">
                <p>404! Fausse route!</p>
            </div>
        </div>
    );
};

export default React.memo(Page404);