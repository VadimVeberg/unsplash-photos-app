import React from 'react';
import './big-photo-page.scss';
import AppHeader from './app-header/app-header';
import AppContent from './app-content/app-content';


export const BigPhotoPage = ({match})=> {
  return (
      <>
        <AppHeader/>
        <AppContent imgSrc={match.params.src}/> 
      </> 
  )
};
