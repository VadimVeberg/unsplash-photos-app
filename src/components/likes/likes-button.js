import React from 'react';

//styles
import styled from 'styled-components';

const Button = styled.button`
    margin-right: 10px;
    padding: 0 7px;

    border: 1px solid  ${props => props.theme.black};
    border-radius: 13px;
    background-color: transparent;

    transition: all .1s ease-in;

    &:focus, &:active {
        outline: none;
    }
    &:hover {
        background-color: ${props => props.theme.darkWhite}
    }

    &:active {
        color:  ${props => props.theme.white};
        background-color:  ${props => props.theme.black};
        border: 1px solid ${props => props.theme.white};
    }

`;

const LikesButton = ({isLiked, likePhoto, unLikePhoto}) => {
    return (
        // <Button>
        <Button onClick={() => isLiked ? unLikePhoto() : likePhoto()}>
            {isLiked ? 'Не нравится' : 'Нравится'}
        </Button>
    )
};

export default LikesButton;