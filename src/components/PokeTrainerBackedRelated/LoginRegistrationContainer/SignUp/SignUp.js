import React, { useContext, useState } from 'react';
import { PokemonsContext } from '../../../../providers/PokemonsProvider';
import { LoginContainer } from './SignUp.styles';

const SignUp = () => {
  const ctx = useContext(PokemonsContext);

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
    setNewUser({});
  };

  return (
    <>
      <LoginContainer>
        <form className="sign-up-form" onSubmit={submitUser}>
          <span className="sign-up-title">Sing up</span>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" onChange={(e) => addNewUser(e, 'username')} placeholder="Enter username" autoComplete="off" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => addNewUser(e, 'password')} placeholder="Enter password" autoComplete="off" />
          <input className="sign-up-submit" type="submit" value="Submit" />
        </form>
      </LoginContainer>
      {ctx.responseData ? (
        <>
          <div className="xyz"> {ctx.responseData}</div>
        </>
      ) : null}
    </>
  );
};

export default SignUp;
