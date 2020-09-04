import React from 'react';

import './app-content.scss';

import {BigPhotoCard} from '../big-photo-card/big-photo-card';

const AppContent = (props) => {
    return (
        <div className="content-field">
          <div className="content">
            <BigPhotoCard imgSrc={props.imgSrc}/>
            </div>
        </div>

    )
};

export default AppContent;

        