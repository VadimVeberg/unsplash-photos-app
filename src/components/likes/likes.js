import React from 'react';

//components
import LikesIcon from './likes-icon';

//styles
import styled from 'styled-components';

const LikesCount = styled.div`
    display: flex;
    align-items: flex-end;

    @media (max-width: 576px) {
        font-size: 12px;
        align-items: center;
     }
`;

const Likes = ({countOfLikes, ...props}) => {
    return (
        <LikesCount>
            {props.children}
            <span>{countOfLikes}</span> 
            <LikesIcon/>
        </LikesCount>
    )
};

export default Likes;