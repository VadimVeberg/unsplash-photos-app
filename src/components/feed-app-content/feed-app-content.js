import React, { Component } from 'react';

//components
import AppContent from '../app-content/app-content';

//TODO rewrite all app using react hooks
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
        const { onScrollFeed, ...props } = this.props;
        return  (
            <AppContent 
            onScrollFeed={onScrollFeed} 
            appContentElement={this.appContentElement}
            props={props}>
                    {this.props.children}
            </AppContent>
        )
    }
};

