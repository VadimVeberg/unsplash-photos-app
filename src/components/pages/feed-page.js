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
import { getLastPhotos, setScrollPosition } from '../../actions/FeedActions';

const FeedRow = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
`;

//TODO прописать хук componentdidupdate, аргументы - prevProps и prevState 

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
    this.props.setScrollPosition(e.target.scrollTop);

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

  render() {
    const error = this.props.feed.error ? <UserMessage error={true} text={`Error! Can't load photos`}/> : null;
    
    const loading = this.props.feed.isFetching ? <Spinner small/> : null;
    return (
      <>
          <AppHeader/>
          <FeedAppContent onScrollFeed={this.onScrollFeed} setScrollPosition={this.setScrollPosition}>
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
          </FeedAppContent>
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
    setScrollPosition: (scrollTop) => dispatch(setScrollPosition(scrollTop))
  }
}
   
  export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);