import React, { Component } from 'react';

//components
import AppContent from '../app-content/app-content';

//styles
import styled from 'styled-components';

const FeedTracker = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: -1300px;

  background-color: red;
  z-index: -10;
`;

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

    position: relative; 

    border-radius: inherit;

    padding-bottom: 20px;
`;

export default class FeedAppContent extends Component  {
    constructor(props) {
        super(props);
        this.appContentElement = React.createRef();
    }

    componentDidMount() {
        this.props.setScrollPosition(this.appContentElement);
    }

    componentWillUnmount() {
        this.props.rememberScrollPosition(this.appContentElement.current.scrollTop);
    }

    render() {
        const { onScrollFeed } = this.props;
        return  (
            <ContentField
            onScroll={onScrollFeed ? e => onScrollFeed(e) : null} ref={this.appContentElement}>
                <Content>
                    {this.props.children}
                    <FeedTracker/>
                </Content>
            </ContentField>
        )
    }
};

