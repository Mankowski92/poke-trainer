import React from 'react';
import { Actions } from '../Actions';
import { Provider } from '../providers/PokemonsProvider';
import LoginRegistrationContainer from '../components/PokeTrainerBackedRelated/LoginRegistrationContainer/LoginRegistrationContainer';

const Login = () => {
  const data = Actions();
  return (
    <>
      <Provider value={data}>
        <LoginRegistrationContainer />
      </Provider>
    </>
  );
};

export default Login;
