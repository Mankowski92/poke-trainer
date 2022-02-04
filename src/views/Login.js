import React from 'react';
import { Actions } from '../Actions';
import { Provider } from '../providers/PokemonsProvider';

import Nav from '../components/Nav/Nav';

const Login = () => {
  const data = Actions();
  return (
    <>
      <Nav />
      <Provider value={data}>
        <div className="App">
          <h1>Login view</h1>
        </div>
      </Provider>
    </>
  );
};

export default Login;
