import React, { useContext, useState } from 'react';
import { PokemonsContext } from '../../../../providers/PokemonsProvider';
import { RegistrationContainer } from './Registration.styles';

const Registration = () => {
  const { insertUser } = useContext(PokemonsContext);
  const [newUser, setNewUser] = useState({});

  const addNewUser = (e, field) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value,
    });
  };

  const submitUser = (e) => {
    e.preventDefault();
    insertUser(newUser);
    e.target.reset();
  };

  return (
    <>
      <RegistrationContainer>
        <form className="registration-form" onSubmit={submitUser}>
          <span className="form-title">Sing up</span>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" onChange={(e) => addNewUser(e, 'username')} placeholder="Enter username" autoComplete="off" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => addNewUser(e, 'password')} placeholder="Enter password" autoComplete="off" required />
          <label htmlFor="password">Confirm password</label>
          {/*CONFIRM PASSWORD IS NOT IN DB PHP FILES OR ELSEWHERE THAN THIS FILE*/}
          {/*<input type="password" id="confirm-password" onChange={(e) => addNewUser(e, 'confirm-password')}*/}
          {/*       placeholder="Confirm password" autoComplete="off" required/>*/}
          <input type="submit" value="Register" />
        </form>
      </RegistrationContainer>
    </>
  );
};

export default Registration;
