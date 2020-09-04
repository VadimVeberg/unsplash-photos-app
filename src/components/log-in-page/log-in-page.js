import React from 'react';

import AppHeader from './app-header/app-header';
import AppContent from './app-content/app-content';

import { connect } from 'react-redux';
import {handleLogin} from '../../actions/UserActions';



function LogInPage(props) {
    const {user, handleLoginAction } = props;
  return (
    <>
        <AppHeader/>
        <AppContent userData={user} handleLogin={handleLoginAction}/>
    </>
  );
}

const mapStateToProps = store => {
    return {
      user: store.user,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        handleLoginAction: () => dispatch(handleLogin())
    }
};

   
export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);