import React from 'react';
import DefaultContainer from '../components/Containers/DefaultContainer/DefaultContainer';
import SignIn from '../components/PokeTrainerBackedRelated/LoginRegistrationContainer/SignIn/SignIn';

const Login = () => {
  return (
    <>
      <DefaultContainer>
        <SignIn />
      </DefaultContainer>
    </>
  );
};

export default Login;
