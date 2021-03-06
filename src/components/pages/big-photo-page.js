import React, { useEffect, useContext } from 'react';

import AppHeader from '../app-header/app-header';
import BigPhotoAppContent from '../big-photo-app-content/big-photo-app-content';
import BigPhotoItem from '../big-photo-item/big-photo-item';
import UserMessage from '../userMessage/userMessage';
import Spinner from '../spinner/spinner';
import LoadingStatus from '../loading-status/loading-status';
import UndoButton from '../undo-button/undo-button';

import UserContext from '../../contexts/userContext';

import styled from 'styled-components';

import { connect } from 'react-redux';
import { getBigPhoto, clearStore } from '../../actions/BigPhotoActions';

import { Link } from 'react-router-dom';

const UndoLink = styled(Link)`
    position: absolute;
    left: 12px;

    width: 45px;
    height: 45px;
`;

const BigPhotoPage = ({bigPhoto, photoId, getBigPhoto, clearStore}) => {
    const { bigPhotoData, error, isFetching, likeError, unLikeError } = bigPhoto;
    const { isLogged, userAuth } = useContext(UserContext);

    useEffect(() => {
        if (bigPhotoData.id !== photoId) {
            clearStore();

            if (isLogged === true) {
                userAuth();
            }

            getBigPhoto(photoId); 
        } 
    }, []);

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
            <BigPhotoAppContent>
                <BigPhotoItem
                    data={bigPhotoData}
                    id={photoId}/>
                {
                    (error || loading) && 
                    <LoadingStatus>
                        {loading}
                        {renderError(error, 'load')}
                        {renderError(likeError, 'like')}
                        {renderError(unLikeError, 'unlike')}
                    </LoadingStatus>
                }
            </BigPhotoAppContent>
        </>
    );
};

const mapStateToProps = store => {
    return {
        bigPhoto: store.bigPhoto
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        getBigPhoto: id => dispatch(getBigPhoto(id)),
        clearStore: () => dispatch(clearStore())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BigPhotoPage);