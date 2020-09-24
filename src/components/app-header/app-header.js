import React, { useContext } from 'react';

//components
import LogActionButton from '../logActionButton/logActionButton';

//context 
import UserContext from '../../contexts/userContext';

//styles
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
    opacity: .9;

    @supports (backdrop-filter: blur(15px)) or (--webkit-backdrop-filter: blur(15px)) {
        backdrop-filter: blur(15px);
        --webkit-backdrop-filter: blur(15px);
    }

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media (max-width: 576px) {
        height: 45px;
    }
`;

 //TODO remove opacity 
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
            <AppIcon viewBox="0 0 58 58">
                <path d="M58,13h-4V9h-4V5H8v4H4v4H0v32h4v4h4v4h42v-4h4v-4h4V13z M2,43V15h2v28H2z M6,47v-2V13v-2h2v36H6z M48,51H10v-2V9V7h38v2v40
                V51z M52,47h-2V11h2v2v32V47z M56,43h-2V15h2V43z"/>
            </AppIcon>
            <ButtonWrapper>
                {isLogged === false && <LogActionButton type={'login'}/>}
                {isLogged === true && <LogActionButton type={'logout'}/>}
            </ButtonWrapper>
        </AppHeaderContainer>
    )
};

export default AppHeader;