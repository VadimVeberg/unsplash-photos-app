import React from 'react'

//components
import LogInButton from '../logInButton/logInButton';

//styles
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.white};
    z-index: 20;
`;

const Title = styled.span`
    font-size: 20px;
`;

const Link = styled.a`
    cursor: pointer;

    color: ${props => props.theme.brown};
`;

const LogInWindow = ({logIn, logOut}) => {
    return (
        <ModalOverlay>
                <Title>Do you have Unsplash account?</Title>
                <LogInButton logIn={logIn}/>
                <Link
                onClick={(e) => {
                    e.preventDefault();
                    logOut();
                }}>
                    Guest Mode
                </Link>
        </ModalOverlay>
    )
};

export default LogInWindow;