import React from 'react';

import './photo-card-info.scss';

import LikesCount from '../likes-count/likes-count';
import DateAdded from '../date-added/date-added';

const PhotoCardInfo = () => {
    return (
        <>
            <div className="photo-card__info photo-info">
                <a className="photo-info__author-link" href="#">OWEN Wen</a>
                <LikesCount/>
                <DateAdded/>
            </div>
        </>
    )
};

export default PhotoCardInfo;