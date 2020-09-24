import React, { useContext } from 'react';

//Components
import Button from '../button/button';

//context 
import UserContext from '../../contexts/userContext';
//TODO smaller button in app header on small screensf 
const LogActionButton = ({type}) => {
    const { logIn, logOut } = useContext(UserContext);

    return (
        <Button
            options={{
                color: 'green',
                bgColor: 'white',
                hoverColor: 'white',
                hoverBgColor: 'green',
                margin: '20px 0 20px'
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