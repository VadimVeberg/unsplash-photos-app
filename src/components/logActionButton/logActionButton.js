import React, { useContext } from 'react';

//Components
import Button from '../button/button';

//context 
import UserContext from '../../contexts/userContext';
//TODO smaller button in app header on small screensf 
const LogActionButton = ({type, size}) => {
    const { logIn, logOut } = useContext(UserContext);

    return (
        <Button
        //TODO make button change color according type
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
    )
};

export default LogActionButton;