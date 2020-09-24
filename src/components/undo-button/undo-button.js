import React from 'react';

//styles
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 50%;
    background-color: transparent;

    width: 45px;
    height: 45px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    

    transition: all .1s linear;
    &:hover {
        background-color: ${props => props.theme.gray};
    }

    &:focus {
        outline: none;
        background-color: transparent;
    }

    &:active {
        outline: none;
        background-color: ${props => props.theme.gray};
    }
`;

const ButtonIcon = styled.div`
    position: absolute;
    left: -3px;
    width: 60px;
    height: 60px; 
    border-top: 10px solid ${props => props.theme.black};
    border-right: 10px solid  ${props => props.theme.black};
    margin-right: -40px;
    transform:  scale(0.3) rotate(230deg);
`;

const UndoButton = () => {
    return (
        <Button>
              <ButtonIcon/>
        </Button>
    )
};

export default UndoButton;