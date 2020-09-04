import React from 'react';
import {Link} from 'react-router-dom';
import Polygon from 'react-polygon';

import './app-header.scss';

const AppHeader = () => {
    return (
        <div className="App__header">
          <Link to='/' className="undo-button-link">
            <button className="undo-button">
              <div className="undo-button__icon"></div>
            {/* <svg className="undo-button__icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 256 256" >
                <Polygon points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128 		"/>
                </svg> */}
            </button>
          </Link>
          <svg className="App__icon" version="1.1" viewBox="0 0 32 32" aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
        </div>
    )
};

export default AppHeader;

        