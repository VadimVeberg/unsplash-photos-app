import React, { Component } from 'react';

//Components
import AppHeader from '../app-header/app-header';
import FeedAppContent from '../feed-app-content/feed-app-content';
import FeedItem from '../feed-item/feed-item';
import UserMessage from '../userMessage/userMessage';
import Spinner from '../spinner/spinner';
import LoadingStatus from '../loading-status/loading-status';

//styles 
import styled from 'styled-components';

//Redux
import { connect } from 'react-redux';
import { getLastPhotos, rememberScrollPosition } from '../../actions/FeedActions';

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
      super(props);
      this.setScrollPosition = this.setScrollPosition.bind(this);
  }

  componentDidMount() {
    const { getLastPhotos } = this.props;

    if (!this.props.feed.isShowedOnce) {
      getLastPhotos();
    }
  }

  onScrollFeed = (e) => {
    const scrollBottom = e.target.scrollTop + 
    e.target.offsetHeight ===  e.target.scrollHeight;
    if (scrollBottom) {
      this.props.getLastPhotos();
    }
  }

  //TODO make scroll not scrobbling when user returns to previous page
  setScrollPosition(ref) {
    ref.current.scrollTop = this.props.feed.scrollPosition;
  }

  renderItems(arr) {
    return arr.map(({id, ...props}) => {
      return <FeedItem key={id} id={id} data={props}/>
    })
  }
//TODO after like photo and return to feed like is not seeing on photo
  render() {
    const error = this.props.feed.error ? <UserMessage error={true} text={`Error! Can't load photos`}/> : null;
    
    const loading = this.props.feed.isFetching ? <Spinner small/> : null;
    return (
      <>
          <AppHeader/>
          <FeedAppContent 
          onScrollFeed={this.onScrollFeed} 
          setScrollPosition={this.setScrollPosition}
          rememberScrollPosition={this.props.rememberScrollPosition}>
            <FeedRow>
              <FeedCol >
          {console.log('RENDER')}
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
    getLastPhotos: () => dispatch(getLastPhotos()),
    rememberScrollPosition: (scrollTop) => dispatch(rememberScrollPosition(scrollTop))
  }
}
   
export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);