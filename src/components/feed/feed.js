import React from 'react';
import './feed.scss';

import AppHeader from './app-header/app-header';
import AppContent from './app-content/app-content';

import { connect } from 'react-redux';



function Feed(props) {
  return (
    <>
        <AppHeader/>
        <AppContent feedData={props.feed}/>
    </>
  );
}

const mapStateToProps = store => {
    console.log(store)
    return {
      feed: store.feed,
      photoCard: store.photoCard
    }
  }
   
  export default connect(mapStateToProps)(Feed);