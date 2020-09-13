import React from 'react';

//components
import Picture from '../picture/picture';
import PhotoCard from '../photo-card/photo-card';
import PhotoInfo from '../photo-info/photo-info';
import Likes from '../likes/likes';
import LikesIcon from '../likes-icon/likes-icon';

//utils
import { isEmpty } from '../../utils/utils';

const BigPhotoItem = ({data}) => {
    if (isEmpty(data)) {
        return null;
    }

    const {url, alt, user, dateAdded, likes, preRender} = data;

    const renderLikes = () => {
        return (
            <Likes countOfLikes={likes}>
                <LikesIcon/>
            </Likes>
        )
    }


    return (
        <PhotoCard width={(preRender.ratio > 100) ? '60%' : '90%'}>
            <Picture  src={url} alt={alt} color={preRender.color} ratio={preRender.ratio}/> 
            <PhotoInfo renderLikes={renderLikes} authorLink={user.link} authorName={user.name} dateAdded={dateAdded}/> 
        </PhotoCard>
    )
};

export default BigPhotoItem;