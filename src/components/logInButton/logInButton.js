import React from 'react';

//Components
import Button from '../button/button';

const LogInButton = ({logIn}) => {
    return (
        <Button
            options={{
                color: 'green',
                bgColor: 'white',
                hoverColor: 'white',
                hoverBgColor: 'green',
                margin: '20px 0 20px'
            }}
            onClick={() => logIn()}>
                Log in
        </Button>
    )
};

export default LogInButton;