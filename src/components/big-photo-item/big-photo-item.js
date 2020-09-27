import React from 'react';

//components
import BigPicture from '../big-picture/big-picture';
import BigPhotoCard from '../big-photo-card/big-photo-card';
import PhotoInfo from '../photo-info/photo-info';
import Likes from '../likes/likes';

//utils
import { isEmpty } from '../../utils/utils';

const BigPhotoItem = ({id, data}) => {

    if (isEmpty(data)) {
        return null;
    }

    const {url, alt, user, dateAdded, likes, liked_by_user} = data;

    const renderLikes = () => {
        return (
            <Likes countOfLikes={likes} isLiked={liked_by_user} 
            photoId={id}/>
        );
    };

    return (
        <BigPhotoCard> 
            <BigPicture 
            src={url} 
            alt={alt}/>
            <PhotoInfo
            renderLikes={renderLikes}
            authorLink={user.link}
            authorName={user.name}
            dateAdded={dateAdded}
            type={'big'}/> 
        </BigPhotoCard>
    );
};

export default BigPhotoItem;