import React from 'react';
//styles
import './spinner.scss';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
transform: scale(.5);
`;

const Spinner = () => {
    return (
        <SpinnerWrapper>
            <div className="loadingio-eclipse">
                <div className="ldio-rpinwye8j0b">
                    <div>
                    </div>
                </div>
            </div>
        </SpinnerWrapper>
    )
}

export default Spinner;