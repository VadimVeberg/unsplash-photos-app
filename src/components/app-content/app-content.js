import React from 'react';

//styles
import styled from 'styled-components';

const ContentField = styled.div`
    position: absolute;
    top: 0;
    overflow: scroll;

    height: 100%;
    width: 100%;
    padding-top: 55px;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    z-index: 0;
    @media (max-width: 576px) {
        padding-top: 45px;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: ${props => props.height ? props.height : ''};

    border-radius: inherit;

    padding-bottom: 20px;
`;

const AppContent = ({onScrollFeed, appContentElement, height, ...props}) => {
    return (
        <ContentField
        onScroll={onScrollFeed ? e => onScrollFeed(e) : null} ref={appContentElement}>
            <Content height={height}>
                {props.children}
            </Content>
        </ContentField>
    );
};

export default AppContent;