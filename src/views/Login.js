import React from 'react';
import { CrudActions } from '../providers/CrudActions';
import { Provider } from '../providers/PokemonsProvider';
import LoginRegistrationContainer from '../components/PokeTrainerBackedRelated/LoginRegistrationContainer/LoginRegistrationContainer';

const Login = () => {
  const data = CrudActions();
  return (
    <>
      <Provider value={data}>
        <LoginRegistrationContainer />
      </Provider>
    </>
  );
};

export default Login;
