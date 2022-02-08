import React from 'react';
import SignIn from './SignIn/SignIn';
import { StyledLoginRegistrationContainer } from './LoginRegistrationContainer.styles';
import Nav from '../../Nav/Nav';

const LoginRegistrationContainer = () => {
  return (
    <>
      <Nav />
      <StyledLoginRegistrationContainer>
        <SignIn />
      </StyledLoginRegistrationContainer>
    </>
  );
};

export default LoginRegistrationContainer;
