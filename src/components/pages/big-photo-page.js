import React, { Component } from 'react';

//Components
import AppHeader from '../app-header/app-header';
import AppContent from '../app-content/app-content';
import BigPhotoItem from '../big-photo-item/big-photo-item';
import UserMessage from '../userMessage/userMessage';
import Spinner from '../spinner/spinner';
import LoadingStatus from '../loading-status/loading-status';
import UndoButton from '../undo-button/undo-button';

//styles
import styled from 'styled-components';

//Redux
import { connect } from 'react-redux';
import { getBigPhoto, clearStore, likePhoto, unLikePhoto } from '../../actions/BigPhotoActions';
import { setToken } from '../../actions/GlobalActions';

//router 
import {Link} from 'react-router-dom';

const UndoLink = styled(Link)`
    position: absolute;
    left: 20px;

    width: 45px;
    height: 45px;
`;

class BigPhotoPage extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        if (!this.props.token) {
            //TODO make request to get token
        } else {
            this.props.setToken(this.props.token);
        }
        
        if (this.props.photoId !== this.props.bigPhoto.id) {
            this.props.clearStore();
        }
        this.props.getBigPhoto(this.props.photoId);
    }

    
    render() {
        const error = this.props.bigPhoto.error ? <UserMessage error={true} text={`Error! Can't load photo`}/> : null;
        const loading = this.props.bigPhoto.isFetching ? <Spinner small/> : null;
        
        return (
            <>
                <AppHeader>
                    <UndoLink to='/'>
                        <UndoButton/>
                    </UndoLink>
                </AppHeader>
                <AppContent>
                    <BigPhotoItem
                        data={this.props.bigPhoto.bigPhotoData}
                        likePhoto={this.props.likePhoto}
                        unLikePhoto={this.props.unLikePhoto}/>
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
    return {
        bigPhoto: store.bigPhoto
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        setToken: (code) => dispatch(setToken(code)),
        getBigPhoto: id => dispatch(getBigPhoto(id)),
        clearStore: () => dispatch(clearStore()),
        likePhoto: (id) => dispatch(likePhoto(id)),
        unLikePhoto: (id) => dispatch(unLikePhoto(id))
    }
  }

export default  connect(mapStateToProps, mapDispatchToProps)(BigPhotoPage)