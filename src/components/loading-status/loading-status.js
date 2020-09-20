import React from 'react';
//components
//styles
import styled from 'styled-components';

const LoadingStatusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-height: 120px;
    width: 100%;
    height: 120px;
`;

const LoadingStatus = (props) => {
    return ( 
        <LoadingStatusWrapper>
            {props.children}
        </LoadingStatusWrapper>
    );
};

export default LoadingStatus;