import React from 'react';

import './big-photo-card.scss';

import BigPhotoCardInfo from '../big-photo-card-info/big-photo-card-info';

export const BigPhotoCard = (props) => {
        const type = 'vertical';
        // const {type} = this.props;
        return( 
            <div className={`big-photo-card big-photo-card_${type}`}>
              <img className="big-photo" src={require(`../../../../public/photos/${props.imgSrc}`)} />
              <BigPhotoCardInfo/>
              {/* <BigPhotoDate/> */}

                
            </div> 
        )
}



{/* <div class="big-photo-card big-photo-card_vertical">
              <img class="big-photo" src="photos/ph_2.jpeg">
              <div class="big-photo-card__info big-photo-info">
                <a class="big-photo-info__author-link" href="#">OWEN Wen</a>
                <div class="big-likes-count">
                  <span class="big-likes-count__text">23</span>
                  <button class="big-likes-count__like-button">
                    <svg class="big-likes-count__icon big-likes-count__icon_active" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g>
                        <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                          c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                          c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                          s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                          C512,93.417,453.532,30,376,30z"/>
                      </g>
                    </svg>
                  </button>
                </div>
                <time class="big-photo-info__date">
                  08 августа 2020
                </time>
              </div>
            </div> */}