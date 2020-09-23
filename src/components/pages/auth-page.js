import React, { useEffect } from 'react';
//components
import UserMessage from '../userMessage/userMessage';
import Spinner from '../spinner/spinner';
import LoadingStatus from '../loading-status/loading-status';
//styles
import styled from 'styled-components';
//redux
import { connect } from 'react-redux';
import { getToken } from '../../actions/UserActions';

const AuthPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  font-size: 35px;
`;

const AuthPage = ({user: {error, isFetching}, getToken}) => {
  useEffect(() => {
    getToken();
  }, []);
  
  const errorMessage = error ? <UserMessage error={true} text={`Error! ${error}`}/> : null,
    spinner = isFetching ? <Spinner/> : null;

  return (
    <AuthPageWrapper>
      <LoadingStatus>
        {errorMessage}
        {spinner}
      </LoadingStatus>
    </AuthPageWrapper>
  );
}

const mapStateToProps = store => {
    return {
      user: store.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getToken: () => dispatch(getToken())
    }
};

   
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);