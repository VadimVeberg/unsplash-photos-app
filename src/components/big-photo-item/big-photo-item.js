import React, { useContext } from 'react';

//components
import BigPicture from '../big-picture/big-picture';
import BigPhotoCard from '../big-photo-card/big-photo-card';
import PhotoInfo from '../photo-info/photo-info';
import Likes from '../likes/likes';
import LikesButton from '../likes/likes-button';

//context 
import UserContext from '../../contexts/userContext';

//utils
import { isEmpty } from '../../utils/utils';

const BigPhotoItem = ({id, data, likePhoto, unLikePhoto}) => {
    const { isLogged } = useContext(UserContext);

    if (isEmpty(data)) {
        return null;
    }

    const {url, alt, user, dateAdded, likes, preRender, liked_by_user} = data;

    const renderLikes = () => {
        return (
            <Likes countOfLikes={likes} isLiked={liked_by_user}>
                {isLogged === true && <LikesButton photoId={id} isLiked={liked_by_user} likePhoto={likePhoto} unLikePhoto={unLikePhoto}/>}
            </Likes>
        );
    };

    return (
        <BigPhotoCard> {/*TODO break make styles for big photo card'*/}
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