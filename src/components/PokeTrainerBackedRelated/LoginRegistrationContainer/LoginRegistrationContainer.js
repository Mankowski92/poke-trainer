import React from 'react';
import Registration from './Registration/Registaration';
import Login from './Login/Login';
import { StyledLoginRegistrationContainer } from './LoginRegistrationContainer.styles';
import Nav from '../../Nav/Nav';

const LoginRegistrationContainer = () => {
  return (
    <>
      <Nav />
      <StyledLoginRegistrationContainer>
        <Login />
        <Registration />
      </StyledLoginRegistrationContainer>
    </>
  );
};

export default LoginRegistrationContainer;
