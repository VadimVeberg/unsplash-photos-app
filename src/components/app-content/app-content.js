import React, { useEffect, useRef } from 'react';

//styles
import './app-content.scss';
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

    padding-bottom: 20px;
`;

const AppContent = ({onScrollFeed, setScrollPosition, ...props}) => {
    //TODO BREAK make useRef hook to change scrollTop
    const appContentElement = useRef(null);

    useEffect(() => {
        if (setScrollPosition) {
            setScrollPosition(appContentElement);
        }
    }, [])

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