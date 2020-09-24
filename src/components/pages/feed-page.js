import React, { useEffect, useContext } from 'react';

//Components
import AppHeader from '../app-header/app-header';
import FeedAppContent from '../feed-app-content/feed-app-content';
import FeedItem from '../feed-item/feed-item';
import UserMessage from '../userMessage/userMessage';
import Button from '../button/button';
import Spinner from '../spinner/spinner';
import LoadingStatus from '../loading-status/loading-status';

//context
import UserContext from '../../contexts/userContext';

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

const FeedPage = ({feed, getLastPhotos, rememberScrollPosition}) => {
  const { isLogged, userAuth } = useContext(UserContext);

  useEffect(() => {
    console.log('monut');
    if (!feed.isShowedOnce) {
      //TODO make error handling if token is invalid
      if (isLogged === true) {
        userAuth();
        getLastPhotos(); //get request AFTER setting token/auth
      } else {
        getLastPhotos();
      }
    }
  }, []);


//TODO favicon
//TODO handling 403 error, when requests limit exced
//TODO с телефона не открываются ссылки в приложении и очень мелкий шрифт 
  const onScrollFeed = (e) => {
    const scrollBottom = (e.target.scrollTop + e.target.offsetHeight > e.target.scrollHeight - 1200);

    if (scrollBottom && !feed.isFetching && !feed.error) { //to allow multiple requests
      getLastPhotos();
    }
  };

  const setScrollPosition = (ref) => {
    ref.current.scrollTop = feed.scrollPosition;
  }

  const renderItems = (arr) => {
    return arr.map(({id, ...props}) => {
      return <FeedItem key={id} id={id} data={props}/>
    })
  }

  const renderError = () => {
    const error = (
      <>
        <UserMessage 
        error={true} 
        text={`Error while loading photos`}>
        </UserMessage>
        <Button
          onClick={getLastPhotos}
          options={{
            color: 'red',
            bgColor: 'white',
            margin: '7px 0 0',
            hoverColor: 'white',
            hoverBgColor: 'red'
        }}>
          Try again
        </Button> 
      </>);

    return feed.error ? error : null;
  }

  const loading = feed.isFetching ? <Spinner small/> : null;

    return (
      <>
          <AppHeader/>
          <FeedAppContent 
          onScrollFeed={onScrollFeed} 
          setScrollPosition={setScrollPosition}
          rememberScrollPosition={rememberScrollPosition}>
            <FeedRow>
              <FeedCol >
                  {renderItems(feed.photos.leftColSources)}
              </FeedCol>
              <FeedCol>
                  {renderItems(feed.photos.rightColSources)}
              </FeedCol>
            </FeedRow>
            <LoadingStatus>
              {loading}
              {renderError()}
            </LoadingStatus>
          </FeedAppContent>
      </>
    );
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