import React from 'react';

//styles 
import styled from 'styled-components';

const Btn = styled.button`
    display: block;
    margin: ${props => props.margin};
    padding: 7px 12px;

    border: 1px solid  ${props => props.theme[props.color]};
    color:  ${props => props.theme[props.color]};
    border-radius: 18px;
    background-color: transparent;

    transition: all .1s ease-in;

    &:focus, &:active {
        outline: none;
    }
    &:hover {
        background-color: ${props => props.theme[props.color]};
        color: ${props => props.theme.white}
    }

    &:active {
        color:  ${props => props.theme.white};
        background-color:  ${props => props.theme.black};
        border: 1px solid ${props => props.theme.white};
    }
`;

const Button = ({color, onClick, margin, ...props}) => {

    return (
        <Btn onClick={onClick} color={color} margin={margin ? margin : ''}>
            {props.children}
        </Btn>
    )
};

export default Button;