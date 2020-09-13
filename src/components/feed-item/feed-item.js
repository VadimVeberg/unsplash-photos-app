import React from 'react';
//components
import Picture from '../picture/picture';
import PhotoCard from '../photo-card/photo-card';
import PhotoInfo from '../photo-info/photo-info';
import Likes from '../likes/likes';
import LikesIcon from '../likes-icon/likes-icon';

//styles
import styled from 'styled-components';

//router
import { Link } from 'react-router-dom';

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const FeedItem = ({id, data}) => {
    const {url, alt_description, user, dateAdded, likes, preRender} = data;

    const renderLikes = () => {
        return (
            <Likes countOfLikes={likes}>
                <LikesIcon/>
            </Likes>
        );
    }
    
    return (
        <PhotoCard>
            <Picture color={preRender.color} ratio={preRender.ratio}>
                <Link to={`/${id}`} src={url}>
                        <Image src={url} alt={alt_description}/> 
                </Link> 
            </Picture>
            <PhotoInfo renderLikes={renderLikes} authorLink={user.link} authorName={user.name} dateAdded={dateAdded}/>
        </PhotoCard>
    )
};

export default FeedItem;