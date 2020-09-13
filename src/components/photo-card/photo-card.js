import React from 'react'

//styles
import styled from 'styled-components';

const PhotoCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => props.width || ''};

    margin-top: 18px;

    @media (max-width: 576px) {
        margin-top: 12px;
    }
`;

const PhotoCard = ({width, ...props}) => {

    return (
        <PhotoCardWrapper width={width}>
            {props.children}
        </PhotoCardWrapper>
    )
};

export default PhotoCard;