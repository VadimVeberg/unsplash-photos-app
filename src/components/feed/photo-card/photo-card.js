import React from 'react';

import './photo-card.scss';
import {Link} from 'react-router-dom';

import PhotoCardInfo from '../photo-card-info/photo-card-info';

const PhotoCard = (props) => {
    const src = props.source;
    return (
        <div className="photo-card">
            <Link to={`/${src}`} src={src}>
                <img className='photo-card__img' src={src}/>
            </Link>
            <PhotoCardInfo/>
        </div>
    )
};

export default PhotoCard;