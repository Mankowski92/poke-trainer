import React from 'react';
import Login from './Login/Login';
import Registration from './Registration/Registaration';
import { StyledLoginRegistrationContainer } from './LoginRegistrationContainer.styles';

const LoginRegistrationContainer = () => {
  return (
    <>
      <StyledLoginRegistrationContainer>
        <Login />
        <Registration />
      </StyledLoginRegistrationContainer>
    </>
  );
};

export default LoginRegistrationContainer;
