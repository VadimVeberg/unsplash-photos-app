import React, { useEffect } from 'react';

//components
import AppContent from '../app-content/app-content';

const appContentElement = React.createRef();

const FeedAppContent = ({setScrollPosition, rememberScrollPosition, onScrollFeed, ...props}) => {

    useEffect(() => {
        setScrollPosition(appContentElement);
        return function cleanup() {
            rememberScrollPosition(appContentElement.current.scrollTop);
        }
    }, []);

    return (
        <AppContent 
            onScrollFeed={onScrollFeed} 
            appContentElement={appContentElement}
            props={props}>
                    {props.children}
        </AppContent>
    )
}

export default FeedAppContent;

