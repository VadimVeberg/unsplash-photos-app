import React, {useEffect} from 'react';

import AppHeader from './app-header/app-header';
import AppContent from './app-content/app-content';

import { connect } from 'react-redux';


import {unsplash} from '../../actions/UserActions';


function Feed(props) {
  useEffect(() => {
    // console.log(unsplash);
    // unsplash.photos.listPhotos(2, 15, "latest")
    // .then(res => {
    //   console.log(res.json());
    // });
  }, [])

  return (
    <>
        <AppHeader/>
        <AppContent feedData={props.feed}/>
    </>
  );
}

const mapStateToProps = store => {
    console.log(store);
    return {
      feed: store.feed,
      photoCard: store.photoCard
    }
  }
   
  export default connect(mapStateToProps)(Feed);