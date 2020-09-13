import React, { useEffect } from 'react';
//components
import UserMessage from '../userMessage/userMessage';
import Spinner from '../spinner/spinner';
import LoadingStatus from '../loading-status/loading-status';
//styles
import styled from 'styled-components';
//redux
import { connect } from 'react-redux';
import { handleLogin } from '../../actions/UserActions';

const LogInPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  font-size: 35px;
`;

const LogInPage = ({user: {error, isFetching}, handleLogin}) => {
  useEffect(() => {
    handleLogin();
  }, []);
  
  const errorMessage = error ? <UserMessage error={true} text={`Error! ${error}`}/> : null,
    spinner = isFetching ? <Spinner/> : null;

  return (
    <LogInPageWrapper>
      <LoadingStatus>
        {errorMessage}
        {spinner}
      </LoadingStatus>
    </LogInPageWrapper>
  );
}

const mapStateToProps = store => {
    return {
      user: store.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: () => dispatch(handleLogin())
    }
};

   
export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);