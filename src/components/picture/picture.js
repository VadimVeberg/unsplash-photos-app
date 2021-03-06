import React from 'react';

import BackgroundField from '../background-field/background-field';

import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
`

const FadeInBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    animation: .18s ${fadeIn} ease-in;
`;

const Image = styled.img`
    position: absolute;
    top: 0;

    width: 100%;

    border-radius: 10px;
`;

const Picture = ({color, ratio, src, alt, height, type, ...props}) => {
    return (
        <FadeInBlock height={height}>
            <BackgroundField color={color} ratio={ratio}/>   
            <Image src={src} alt={alt}/> 
                {props.children}
        </FadeInBlock>
    );
};

export default Picture;