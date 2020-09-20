import React from 'react';
//styles
import styled from 'styled-components';


const UserMessage = ({error, text, ...props}) => {
    //TODO remove component from here
    const MessageText = styled.span`
        color: ${error ? props => props.theme.red : props => props.theme.black};
        font-weight: 700;
    `;   

    return (
    <MessageText>
        {text}
        {props.children}
    </MessageText>)
};

UserMessage.defaultProps = {
    text: 'Something went wrong...'
}

export default UserMessage;