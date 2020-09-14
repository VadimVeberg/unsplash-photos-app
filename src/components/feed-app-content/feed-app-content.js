import React, { useEffect, useRef } from 'react';

//components
import AppContent from '../app-content/app-content';

const FeedAppContent = ({onScrollFeed, setScrollPosition, ...props}) => {
    const appContentElement = useRef(null);

    useEffect(() => {
        if (setScrollPosition) {
            setScrollPosition(appContentElement);
        }
    }, [])

    return  (
        <AppContent onScrollFeed={onScrollFeed} props={props} appContentElement={appContentElement}>
            {props.children}
        </AppContent>
    )
};

export default FeedAppContent;