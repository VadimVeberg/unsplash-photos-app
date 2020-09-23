import React, { Component } from 'react';

//Components
import AppHeader from '../app-header/app-header';
import FeedAppContent from '../feed-app-content/feed-app-content';
import FeedItem from '../feed-item/feed-item';
import UserMessage from '../userMessage/userMessage';
import Button from '../button/button';
import Spinner from '../spinner/spinner';
import LoadingStatus from '../loading-status/loading-status';

//styles 
import styled from 'styled-components';

//Redux
import { connect } from 'react-redux';
import { getLastPhotosRequest, getLastPhotosSuccess, getLastPhotosFail, rememberScrollPosition } from '../../actions/FeedActions';
import { unsplash } from '../../utils/unsplash';
 
const FeedRow = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
`;

const FeedCol = styled.div`
  display: flex;
  flex-direction: column;

  width: 45%;
`;

//TODO убрать черные куски фона под фото ( из-за тени)
class FeedPage extends Component {
  constructor(props) {
      super(props);
      this.setScrollPosition = this.setScrollPosition.bind(this);
      this.pageCounter = 1;
  }

  componentDidMount() {
    console.log('monut');
    if (!this.props.feed.isShowedOnce) {
      console.log('async call');
      //TODO make error handling if token is invalid
      this.props.userAuth();
      this.getLastPhotos();
    }
  }

  getLastPhotos = () => {
    const { getLastPhotosRequest, getLastPhotosSuccess, getLastPhotosFail } = this.props;
    getLastPhotosRequest();
    unsplash.photos.listPhotos(this.pageCounter++, 10, "latest")
    .then(res => res.json())
      .then(json => {
        getLastPhotosSuccess(json);
      })
      .catch((e) => {
          setTimeout(() => {
              getLastPhotosFail(e);
          }, 200);
      });
  };

  onScrollFeed = (e) => {
    const scrollBottom = (e.target.scrollTop + e.target.offsetHeight > e.target.scrollHeight - 1200);

    if (scrollBottom && !this.props.feed.isFetching && !this.props.feed.error) { //to allow multiple requests
      this.getLastPhotos();
    }
  };

  setScrollPosition(ref) {
    ref.current.scrollTop = this.props.feed.scrollPosition;
  }

  renderItems(arr) {
    return arr.map(({id, ...props}) => {
      return <FeedItem key={id} id={id} data={props}/>
    })
  }

  renderError = () => {
    const error = (
      <>
        <UserMessage 
        error={true} 
        text={`Error while loading photos`}>
        </UserMessage>
        <Button
        onClick={this.getLastPhotos}
        color={'red'}
        margin={'7px 0 0'}>
          Try again
        </Button> 
      </>);

    return this.props.feed.error ? error : null;
  }

//TODO make destructurization to avoid THIS anywhere
  render() {
    const loading = this.props.feed.isFetching ? <Spinner small/> : null;
    return (
      <>
          <AppHeader/>
          {/*TODO make usecontxt for sroollfeed props e.t.c*/}
          <FeedAppContent 
          onScrollFeed={this.onScrollFeed} 
          setScrollPosition={this.setScrollPosition}
          rememberScrollPosition={this.props.rememberScrollPosition}>
            <FeedRow>
              <FeedCol >
                  {this.renderItems(this.props.feed.photos.leftColSources)}
              </FeedCol>
              <FeedCol>
                  {this.renderItems(this.props.feed.photos.rightColSources)}
              </FeedCol>
            </FeedRow>
            <LoadingStatus>
              {loading}
              {this.renderError()}
            </LoadingStatus>
          </FeedAppContent>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    feed: store.feed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLastPhotosRequest: () => dispatch(getLastPhotosRequest()),
    getLastPhotosSuccess: (json) => dispatch(getLastPhotosSuccess(json)),
    getLastPhotosFail: (e) => dispatch(getLastPhotosFail(e)),
    rememberScrollPosition: (scrollTop) => dispatch(rememberScrollPosition(scrollTop))
  }
}
   
export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);