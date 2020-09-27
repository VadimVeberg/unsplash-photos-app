import React from 'react';

//styles
import styled from 'styled-components';

const Wrapper = styled.div`
        width: 100%;
        padding-bottom:  ${props => props.ratio}%;

        background-color: ${props => props.color}; 
        border-radius: 10px;
        transform: scale(.97); 
        z-index: -30;
`;

const BackgroundField = ({color, ratio}) => {
    return (
        <Wrapper color={color} ratio={ratio}>
        </Wrapper>
    );
};

export default BackgroundField;