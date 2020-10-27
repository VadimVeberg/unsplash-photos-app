import React from 'react';

import PhotoCard from '../photo-card/photo-card';
import Picture from '../picture/picture';
import PhotoInfo from '../photo-info/photo-info';
import Likes from '../likes/likes';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

const LinkDiv = styled(Link)`
    position: absolute;
    top: 0;

    display: block;
    width: 100%;

    padding-bottom: ${props => props.ratio}%;

    z-index: 20;
`;


const FeedItem = ({id, data}) => {
    const {url, alt_description, user, dateAdded, likes, preRender, liked_by_user} = data;

    const renderLikes = () => {
        return (
            <Likes countOfLikes={likes} isLiked={liked_by_user} photoId={id}/>
        );
    };
    
    return (
        <PhotoCard>
            <Picture 
            color={preRender.color} 
            ratio={preRender.ratio}
            src={url} 
            alt={alt_description}>
                <LinkDiv ratio={preRender.ratio} to={`/${id}`} src={url}/>
            </Picture>

            <PhotoInfo 
            renderLikes={renderLikes} 
            authorLink={user.link}
            authorName={user.name} 
            dateAdded={dateAdded}
            isLiked={liked_by_user}/>
        </PhotoCard>
    );
};

export default FeedItem;