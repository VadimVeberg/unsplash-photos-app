import React from 'react'

import styled from 'styled-components';

const PhotoCardWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    border-radius: 10px;
`;

const BigPhotoCard = ({width, ...props}) => {

    return (
        <PhotoCardWrapper width={width}>
            {props.children}
        </PhotoCardWrapper>
    )
};

export default BigPhotoCard;