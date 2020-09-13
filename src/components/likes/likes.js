import React from 'react';

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
            <span>{countOfLikes}</span>
            {props.children}
        </LikesCount>
    )
};

export default Likes;