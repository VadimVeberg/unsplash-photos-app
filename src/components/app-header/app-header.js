import React, { useContext } from 'react';

import LogActionButton from '../logActionButton/logActionButton';

import UserContext from '../../contexts/userContext';

import styled from 'styled-components';

const AppHeaderContainer = styled.div`
    height: 55px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: sticky; 
    top: 0;

    background-color: ${props => props.theme.darkWhite};
    z-index: 1;
    box-shadow: 0px -5px 11px gray;
    /* opacity: .9; */

    /* @supports (backdrop-filter: blur(15px)) or (--webkit-backdrop-filter: blur(15px)) {
        backdrop-filter: blur(15px);
        --webkit-backdrop-filter: blur(15px);
    } */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media (max-width: 576px) {
        height: 45px;
    }
`;

const AppIcon = styled.svg`
    height: 35px;
    width: 35px;

    @media (max-width: 576px) {
        height: 25px;
        width: 25px;
    }
`;

const ButtonWrapper = styled.div`
    position: absolute;
    right: 15px;
`;


const AppHeader = (props) => {
    const { isLogged } = useContext(UserContext);

    return (
        <AppHeaderContainer>
            {props.children}
            <ButtonWrapper>
                {isLogged === false && <LogActionButton type={'login'} size={'small'}/>}
                {isLogged === true && <LogActionButton type={'logout'} size={'small'}/>}
            </ButtonWrapper>
        </AppHeaderContainer>
    )
};

export default AppHeader;