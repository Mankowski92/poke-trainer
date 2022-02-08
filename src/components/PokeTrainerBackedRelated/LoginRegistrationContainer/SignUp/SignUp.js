import React, { useContext, useState } from 'react';
import { PokemonsContext } from '../../../../providers/PokemonsProvider';
import { LoginContainer } from './SignUp.styles';

const SignUp = () => {
  const { registerUser } = useContext(PokemonsContext);
  const [newUser, setNewUser] = useState({});

  const addNewUser = (e, field) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value,
    });
  };

  const submitUser = (e) => {
    e.preventDefault();
    registerUser(newUser);
    e.target.reset();
  };

  return (
    <>
      <LoginContainer>
        <form className="sign-in-form" onSubmit={submitUser}>
          <span className="sign-in-title">Sing up</span>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" onChange={(e) => addNewUser(e, 'username')} placeholder="Enter username" autoComplete="off" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => addNewUser(e, 'password')} placeholder="Enter password" autoComplete="off" />
          <input className="sign-in-submit" type="submit" value="Submit" />
        </form>
      </LoginContainer>
    </>
  );
};

export default SignUp;
