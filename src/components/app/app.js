import React, { useEffect, useRef } from 'react';

//Components
import LogInWindow from '../logInWindow/logInWindow';
import AuthPage from '../pages/auth-page';
import FeedPage from '../pages/feed-page';
import BigPhotoPage from '../pages/big-photo-page';

//context
import UserContext from '../../contexts/userContext';

//styles
import styled, { ThemeProvider } from 'styled-components';
import { Container } from 'reactstrap';
import { theme } from '../../style_vars';

//Redux
import { connect } from 'react-redux';
import { logIn, logOut, setToken, getAuthUrl } from '../../actions/GlobalActions';

//router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 0;

    @media (max-width: 576px) {
        padding-left: 0;
        padding-right: 0;
        margin: 0;
    }
`;

const AppBlock = styled.div`
  position: relative;

  width: 780px;
  height: 95vh;
  overflow: hidden;
  margin-top: 20px;

  border-radius: 10px;
  background-color: ${props => props.theme.white};
  box-shadow: 0px 0px 25px ${props => props.theme.black};

  @media (max-width: 576px) {
      height: 100vh;
      margin-top: 0;

      border-radius: 0;
  }
`;
//TODO prop types
const App = ({global: {token, isTokenSetted, isLogged} , logIn, logOut, setToken, getAuthUrl}) => {
  const isInitialMount = useRef(false);

  useEffect(() => {
    if (isInitialMount.current) {    //imitating ComponentDidUpdate()
      //eslint-disable-next-line no-undef
      window.location.reload(false);
    } else {
      isInitialMount.current = true;
    }
  }, [isLogged]);
  
  const userAuth = () => {
      if (!token) {
        getAuthUrl();
      } else if (!isTokenSetted) {
        setToken(token);
      }
  };
  
  const user = {
    isLogged,
    isTokenSetted,
    userAuth,
    logIn,
    logOut
  }
  
  const loginWindow = isLogged === null ? <LogInWindow/> : null;

  return (
    <Router>
      <ThemeProvider theme={theme}>  {/* making access to global style variables */}
        <UserContext.Provider value={user}>    {/* allows to get global user login/out data in every page or component */}
          <AppContainer>
            {/*TODO in Safari border radius of app is blincking*/}
              <AppBlock >
                {loginWindow}
                { isLogged !== null &&
                  <Switch>
                    <Route exact path='/auth' component={AuthPage}/>
                    <Route exact path='/' render={() => {
                      return <FeedPage/>
                      }}/>
                    <Route exact path='/:id' render={({match}) => {
                      const {id} = match.params;
                      return <BigPhotoPage photoId={id}/>
                    }}/>
                  </Switch>
                }
              </AppBlock>
          </AppContainer> 
        </UserContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

const mapStateToProps = store => {
  return {
    global: store.global
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => dispatch(logIn()),
    logOut: () => dispatch(logOut()),
    setToken: (code) => dispatch(setToken(code)),
    getAuthUrl: () => dispatch(getAuthUrl()),
  }
}
  
//TODO сделать разделение кода + ленивую подгрузуку для компонентов реализовать номрально, как здесь описано https://ru.reactjs.org/docs/code-splitting.html
export default connect(mapStateToProps, mapDispatchToProps)(App);


