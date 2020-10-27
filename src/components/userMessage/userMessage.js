import React from 'react';

import styled from 'styled-components';

const MessageText = styled.span`
        color: ${props => props.error ? props.theme.red :props.theme.black};
        font-weight: 700;
    `;   

const UserMessage = ({error, text, ...props}) => {
    return (
    <MessageText error={error}>
        {text}
        {props.children}
    </MessageText>)
};

UserMessage.defaultProps = {
    text: 'Something went wrong...'
};

export default UserMessage;