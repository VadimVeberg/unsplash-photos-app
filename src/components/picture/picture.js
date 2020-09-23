import React, { useEffect } from 'react';

//styles
import styled from 'styled-components';


const Wrapper = styled.div`
        width: 100%;

        overflow: hidden;

        background-color: ${props => props.color}; 
        border-radius: 10px;
        box-shadow: 1px 1px 15px -8px ${props => props.theme.gray};
`;

const Service = styled.div`
        position: relative;
        height: 0;
        padding-bottom: ${props => props.ratio}%;
`;

const Content = styled.div`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
`;

//TODO useMemo !
const Picture = React.memo(({color, ratio, ...props}) => {
    return (
        <Wrapper color={color}>
            <Service ratio={ratio}>
                <Content> {/* for calcualting height by percent of width*/}
                    {props.children}
                </Content> 
            </Service>
        </Wrapper>
    )
});

export default Picture;