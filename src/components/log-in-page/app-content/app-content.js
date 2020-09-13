import React, {useEffect} from 'react';

import './app-content.scss';

export const AppContent = ({handleLogin}) => {
    useEffect(() => {
        // handleLogin();
    }, []);

    return (
        <div className="content-field">
            <div className="content">
                Welcome!
            </div>
        </div>
    )
};

export default AppContent;