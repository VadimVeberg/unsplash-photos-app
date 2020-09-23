import React, { useEffect, useContext } from 'react';

//components
import Picture from '../picture/picture';
import PhotoCard from '../photo-card/photo-card';
import PhotoInfo from '../photo-info/photo-info';
import Likes from '../likes/likes';
import LikesButton from '../likes/likes-button';

//context 
import UserContext from '../../contexts/userContext';

//styles 
import styled from 'styled-components';

//utils
import { isEmpty } from '../../utils/utils';

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

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