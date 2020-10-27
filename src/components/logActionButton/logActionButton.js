import React, { useContext } from 'react';

import Button from '../button/button';

import UserContext from '../../contexts/userContext';
const LogActionButton = ({type, size}) => {
    const { logIn, logOut } = useContext(UserContext);

    return (
        <Button
            options={{
                color: type === 'login' ? 'green' : type === 'logout' ? 'red' : null,
                bgColor: 'white',
                hoverColor: 'white',
                hoverBgColor: type === 'login' ? 'green' : type === 'logout' ? 'red' : null,
                margin: '20px 0 20px',
                padding: size === 'small' ? '2px 7px' : '7px 12px'
            }}
            onClick={() => {
                if (type === 'login') {
                    logIn();
                } else if (type === 'logout') {
                    logOut();
                }
            }}>
                Log {type === 'login' ? 'in' : type === 'logout' ? 'out' : null}
        </Button>
    );
};

export default LogActionButton;