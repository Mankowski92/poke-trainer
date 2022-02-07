import React from 'react';
import { LoginRegistrationActions } from '../providers/LoginRegistrationActions';
import { Provider } from '../providers/PokemonsProvider';
import LoginRegistrationContainer from '../components/PokeTrainerBackedRelated/LoginRegistrationContainer/LoginRegistrationContainer';

const Login = () => {
  const data = LoginRegistrationActions();
  return (
    <>
      <Provider value={data}>
        <LoginRegistrationContainer />
      </Provider>
    </>
  );
};

export default Login;
