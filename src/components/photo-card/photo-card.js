import React from 'react'

import styled from 'styled-components';

const PhotoCardWrapper = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 18px;

    @media (max-width: 576px) {
        margin-top: 12px;
    }
`;

const PhotoCard = ({...props}) => {

    return (
        <PhotoCardWrapper>
            {props.children}
        </PhotoCardWrapper>
    )
};

export default PhotoCard;