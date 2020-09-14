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

//TODO make horizontal big photo no-sroll - remove padding
//TODO make scroll bar not hide by app-header
const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-radius: inherit;

    padding-bottom: 20px;
`;

const AppContent = ({onScrollFeed, setScrollPosition, appContentElement, ...props}) => {
    return (
        <ContentField
        onScroll={onScrollFeed ? e => onScrollFeed(e) : null} ref={appContentElement}>
            <Content>
                {props.children}
            </Content>
        </ContentField>
    );
};

export default AppContent;