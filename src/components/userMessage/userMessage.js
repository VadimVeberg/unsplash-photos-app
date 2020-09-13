import React from 'react';
//styles
import styled from 'styled-components';


const UserMessage = ({error, text}) => {
    const MessageText = styled.span`
        color: ${error ? props => props.theme.red : props => props.theme.black};
        font-weight: 700;
    `;   

    return <MessageText>{text}</MessageText>
};

UserMessage.defaultProps = {
    text: 'Something went wrong...'
}

export default UserMessage;