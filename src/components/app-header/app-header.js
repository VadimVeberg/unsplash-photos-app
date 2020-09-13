import React from 'react';

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

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media (max-width: 576px) {
        height: 45px;
    }
`;

const AppHeader = (props) => {
    return (
        <AppHeaderContainer>
            {props.children}
            {/*TODO Replace logo*/}
            {/* <svg className="App__icon" version="1.1" viewBox="0 0 32 32" aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg> */}
        </AppHeaderContainer>
    )
};

export default AppHeader;