import React from 'react';

//components
import LikesButton from './likes-button';

//styles
import styled from 'styled-components';

const LikesCount = styled.div`
    display: flex;
    font-size: 17px;

    @media (max-width: 576px) {
        align-items: center;

        font-size: 14px;
     }
`;

const Likes = ({countOfLikes, isLiked, photoId, ...props}) => {
    return (
        <LikesCount>
            {props.children}
            <span>{countOfLikes}</span> 
        <LikesButton 
        isLiked={isLiked}
        photoId={photoId}
        />
        </LikesCount>
    );
};

export default Likes;