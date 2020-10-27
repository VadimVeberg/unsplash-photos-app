import React from 'react';

import styled from 'styled-components';

const Btn = styled.button`
    display: block;
    margin: ${props => props.margin};
    padding: ${props => props.padding};

    border: 1px solid  ${props => props.theme[props.color]};
    color:  ${props => props.theme[props.color]};
    border-radius: 18px;
    background-color: ${props => props.theme[props.bgColor]};
    transition: all .1s ease-in;

    &:focus, &:active {
        outline: none;
    }
    &:hover {
        background-color: ${props => props.theme[props.hoverBgColor]};
        color: ${props => props.theme[props.hoverColor]}
    }

    &:active {
        color:  ${props => props.theme[props.hoverColor]};
        background-color:  ${props => props.theme[props.hoverBgColor]};
        border: 1px solid ${props => props.theme[props.hoverBgColor]};
    }

    @media (max-width: 576px) {
        font-size: 12px;
    }
`;

const Button = ({options : {color = 'red', bgColor = 'white', hoverColor = 'white', hoverBgColor = 'red', margin = '', padding = ' 7px 12px'}, onClick, ...props}) => {
    return (
        <Btn 
        onClick={onClick} 
        color={color} 
        bgColor={bgColor}
        hoverColor={hoverColor}
        hoverBgColor={hoverBgColor}
        margin={margin}
        padding={padding}>
            {props.children}
        </Btn>
    );
};

export default Button;