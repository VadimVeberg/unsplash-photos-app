import React from 'react';

//Components
import LogInPage from '../pages/log-in-page';
import FeedPage from '../pages/feed-page';
import BigPhotoPage from '../pages/big-photo-page';

//styles
import styled, { ThemeProvider } from 'styled-components';
import { Container } from 'reactstrap';
import { theme } from '../../style_vars';

//Redux
import { connect } from 'react-redux';
import { auth} from '../../actions/FeedActions';

//router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

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

const App = (props) => {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>  {/* making access to global style variables */}
        <AppContainer>
          {/*TODO in Safari border radius of app is blincking*/}
            <AppBlock>
                <Switch>
                  <Route exact path='/auth' component={LogInPage}/>
                  <Route  exact path='/' component={FeedPage}/>
                  <Route exact path='/:id' render={({match}) => {
                    const {id} = match.params;
                    return <BigPhotoPage photoId={id}/>
                  }}/>
                </Switch>
            </AppBlock>
        </AppContainer> 
      </ThemeProvider>
    </Router>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    auth: (code) => dispatch(auth(code)),
  }
}
   
export default connect(mapDispatchToProps)(App);


