import React, { useEffect, useContext } from 'react';

//components
import BackgroundField from '../backgroundField/backgroundField';
import PhotoCard from '../photo-card/photo-card';
import Picture from '../picture/picture';
import PhotoInfo from '../photo-info/photo-info';
import Likes from '../likes/likes';
import LikesButton from '../likes/likes-button';

//context 
import UserContext from '../../contexts/userContext';

//styles 
import styled from 'styled-components';

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
        )
    }

    return (
    <PhotoCard width={(preRender.ratio > 100) ? '75%' : '95%'}>
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
    )
};

export default BigPhotoItem;