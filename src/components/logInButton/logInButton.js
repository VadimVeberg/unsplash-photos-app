import React, { useContext } from 'react';

//Components
import Button from '../button/button';

//context 
import UserContext from '../../contexts/userContext';

const LogInButton = () => {
    const { logIn } = useContext(UserContext);

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