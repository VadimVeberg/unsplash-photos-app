// import React, { useEffect, useRef } from 'react';
import React, { Component } from 'react';

//components
import AppContent from '../app-content/app-content';

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
        return  (
            <AppContent 
            onScrollFeed={this.props.onScrollFeed} 
            props={this.props} 
            appContentElement={this.appContentElement}
            >
                {this.props.children}
            </AppContent>
        )
    }
};

//TODO clean excess code here and in the top
// const FeedAppContent = ({onScrollFeed, setScrollPosition, rememberScrollPosition, ...props}) => {
//     const appContentElement = useRef(null);

//     useEffect(() => {
//         if (setScrollPosition) {
//             setScrollPosition(appContentElement);
//         }
//     }, [])

//     return  (
//         <AppContent 
//         onScrollFeed={onScrollFeed} 
//         props={props} 
//         appContentElement={appContentElement}
//         >
//             {props.children}
//         </AppContent>
//     )
// };

// export default FeedAppContent;