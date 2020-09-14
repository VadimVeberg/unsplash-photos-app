import React from 'react';

//components
import Picture from '../picture/picture';
import PhotoCard from '../photo-card/photo-card';
import PhotoInfo from '../photo-info/photo-info';
import Likes from '../likes/likes';
import LikesButton from '../likes/likes-button';

//styles 
import styled from 'styled-components';

//utils
import { isEmpty } from '../../utils/utils';

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const BigPhotoItem = ({data, likePhoto, unLikePhoto}) => {
    if (isEmpty(data)) {
        return null;
    }

    const {url, alt, user, dateAdded, likes, preRender, liked_by_user} = data;

    const renderLikes = () => {
        return (
            <Likes countOfLikes={likes}>
                <LikesButton isLiked={liked_by_user} likePhoto={likePhoto} unLikePhoto={unLikePhoto}/>
            </Likes>
        )
    }

    return (
        <PhotoCard width={(preRender.ratio > 100) ? '60%' : '90%'}>
            <Picture  src={url}  color={preRender.color} ratio={preRender.ratio}>
                <Image src={url} alt={alt}/> 
            </Picture>
            <PhotoInfo
                renderLikes={renderLikes}
                authorLink={user.link}
                authorName={user.name}
                dateAdded={dateAdded}/> 
        </PhotoCard>
    )
};

export default BigPhotoItem;