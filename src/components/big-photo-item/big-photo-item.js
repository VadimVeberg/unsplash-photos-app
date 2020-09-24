import React, { useContext } from 'react';

//components
import PhotoCard from '../photo-card/photo-card';
import Picture from '../picture/picture';
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

    const calcPhotoWidth = () => {
        const isMobileDevice = document.documentElement.clientWidth < 576;
    
        const scales = {
            vertical: isMobileDevice ? '95%' : '75%',
            horizontal: '95%'
        }

        return preRender.ratio > 100 ? scales.vertical : scales.horizontal;
    };

    return (
    <PhotoCard width={calcPhotoWidth()}>
            <Picture 
            color={preRender.color} 
            ratio={preRender.ratio}
            src={url} 
            alt={alt}/>
            <PhotoInfo
                renderLikes={renderLikes}
                authorLink={user.link}
                authorName={user.name}
                dateAdded={dateAdded}/> 
        </PhotoCard>
    );
};

export default BigPhotoItem;