import React from 'react';

//styles
import styled from 'styled-components';

const Content = styled.div`
    position: absolute;
    top: 0;
    
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;

    padding-top: 65px;
    padding-bottom: 20px;

    overflow: scroll;

    @media (max-width: 576px) {
        padding-top: 45px;
    }
`;

const BigPhotoAppContent = ({...props}) => {
    return (
            <Content >
                {props.children}
            </Content>
    );
};

export default BigPhotoAppContent;