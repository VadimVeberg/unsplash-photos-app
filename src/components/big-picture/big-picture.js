import React from 'react';

//styles
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
`;

const FadeInBlock = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    flex-grow: 2;
    flex-basis: 90%;

    height: 80%;

    border-radius: 10px;
    
    animation: .18s ${fadeIn} ease-in;
`;

const Image = styled.img`
  position: absolute;

  object-fit: contain;
  width: 95%;
  height: 100%;
`;

const BigPicture = ({src, alt, ...props}) => {
    return (
        <FadeInBlock>
            <Image src={src} alt={alt}/> 
                {props.children}
        </FadeInBlock>
    );
};

export default BigPicture;