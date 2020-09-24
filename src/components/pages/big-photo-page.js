import React, { useEffect, useContext } from 'react';

//Components
import AppHeader from '../app-header/app-header';
import AppContent from '../app-content/app-content';
import BigPhotoItem from '../big-photo-item/big-photo-item';
import UserMessage from '../userMessage/userMessage';
import Spinner from '../spinner/spinner';
import LoadingStatus from '../loading-status/loading-status';
import UndoButton from '../undo-button/undo-button';

//context 
import UserContext from '../../contexts/userContext';

//styles
import styled from 'styled-components';

//Redux
import { connect } from 'react-redux';
import { getBigPhoto, clearStore, likePhoto, unLikePhoto } from '../../actions/BigPhotoActions';

//router 
import {Link} from 'react-router-dom';

const UndoLink = styled(Link)`
    position: absolute;
    left: 20px;

    width: 45px;
    height: 45px;
`;

const BigPhotoPage = ({bigPhoto, photoId, getBigPhoto, clearStore, likePhoto, unLikePhoto}) => {
    const { bigPhotoData, error, isFetching, likeError, unLikeError } = bigPhoto;
    const { isLogged, userAuth } = useContext(UserContext);

    useEffect(() => {
        if (bigPhotoData.id !== photoId) {
            clearStore();
        } 
        if (isLogged === true) {
            userAuth();
        }
        getBigPhoto(photoId);  //get request AFTER setting token/auth
    }, []);
//TODO make photos not loading while authorization

    const renderError = (errorType, description) => {
        return errorType ? <UserMessage error={true} text={`Error! Can't ${description} photo`}/> : null;
    };

    const loading = isFetching ? <Spinner small/> : null;

    return (
        <>
            <AppHeader>
                <UndoLink to='/'>
                    <UndoButton/>
                </UndoLink>
            </AppHeader>
            <AppContent>
                <BigPhotoItem
                    data={bigPhotoData}
                    id={photoId}
                    likePhoto={likePhoto}
                    unLikePhoto={unLikePhoto}/>
                <LoadingStatus>
                    {loading}
                    {renderError(error, 'load')}
                    {renderError(likeError, 'like')}
                    {renderError(unLikeError, 'unlike')}
                </LoadingStatus>
            </AppContent>
        </>
    )
};

const mapStateToProps = store => {
    return {
        bigPhoto: store.bigPhoto
    }
  }
  
const mapDispatchToProps = dispatch => {
return {
    getBigPhoto: id => dispatch(getBigPhoto(id)),
    clearStore: () => dispatch(clearStore()),
    likePhoto: (id) => dispatch(likePhoto(id)),
    unLikePhoto: (id) => dispatch(unLikePhoto(id))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(BigPhotoPage);