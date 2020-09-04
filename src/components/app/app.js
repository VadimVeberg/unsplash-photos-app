import React from 'react';
import {Container} from 'reactstrap';
import './app.scss';

import { connect } from 'react-redux';
import {getLastPhotos} from '../../actions/FeedActions';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {BigPhotoPage} from '../big-photo-page/big-photo-page';

import LogInPage from '../log-in-page/log-in-page';
import Feed from '../feed/feed';

const containerStyle = {
  padding: 0
}

function App(props) {
  const {getLastPhotos} = props;
  return (
      <Container className="App-container" style={containerStyle}>
          <div className="App">
            <Router>
              <Switch>
              <Route exact path='/auth'>
                <LogInPage/>
              </Route>
              <Route  path='/' render={routeProps => (
                <Feed getLastPhotosAction={getLastPhotos} />
              )}/>
              {/* <Route path='/:path/:src' component={BigPhotoPage}/> */}
              </Switch>
            </Router>
          </div>
      </Container> 
  );
}


/* Redux */

const mapStateToProps = store => {
  console.log(store)
  return {
    feed: store.feed,
    photoCard: store.photoCard,

  }
};

const mapDispatchToProps = dispatch => {
  return {
    getLastPhotos: () => dispatch(getLastPhotos())
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(App)


