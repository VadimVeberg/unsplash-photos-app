import React, { Component } from 'react';

//Components
import AppHeader from '../app-header/app-header';
import AppContent from '../app-content/app-content';
import FeedItem from '../feed-item/feed-item';
import UserMessage from '../userMessage/userMessage';
import Spinner from '../spinner/spinner';
import LoadingStatus from '../loading-status/loading-status';

//styles 
import styled from 'styled-components';

//Redux
import { connect } from 'react-redux';
import { getLastPhotos, writeScrollPosition } from '../../actions/FeedActions';

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

class FeedPage extends Component {
  constructor(props) {
      super();
      this.setScrollPosition = this.setScrollPosition.bind(this);
  }

  componentDidMount() {
    if (!this.props.feed.isShowedOnce) {
      this.props.getLastPhotos();
    }
  }

  onScrollFeed = (e) => {
    this.props.writeScrollPosition(e.target.scrollTop);

    const scrollBottom = e.target.scrollTop + 
    e.target.offsetHeight ===  e.target.scrollHeight;
    if (scrollBottom) {
      this.props.getLastPhotos();
    }
  }

  //TODO make scroll not scrobbling when return to previous page
  setScrollPosition(ref) {
    ref.current.scrollTop = this.props.feed.scrollPosition;
  }

  renderItems(arr) {
    return arr.map(({id, ...props}) => {
      return <FeedItem key={id} id={id} data={props}/>
    })
  }

  render() {
    const error = this.props.feed.error ? <UserMessage error={true} text={`Error! Can't load photos`}/> : null;
    
    const loading = this.props.feed.isFetching ? <Spinner small/> : null;
    return (
      <>
          <AppHeader/>
          <AppContent onScrollFeed={this.onScrollFeed} setScrollPosition={this.setScrollPosition}>
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
              {error}
            </LoadingStatus>
          </AppContent>
      </>
    );
  }
}

const mapStateToProps = store => {
  // console.log(store);
  return {
    feed: store.feed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLastPhotos: () => dispatch(getLastPhotos()),
    writeScrollPosition: (scrollTop) => dispatch(writeScrollPosition(scrollTop))
  }
}
   
  export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);