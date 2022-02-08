import React, { useContext, useState } from 'react';
import { PokemonsContext } from '../../../../providers/PokemonsProvider';
import { SignInContainer, StyledLoginLink } from './SignIn.styles';

const SignIn = () => {
  const { validateUser } = useContext(PokemonsContext);
  const [user, setUser] = useState({});

  const createUserDraft = (e, field) => {
    setUser({
      ...user,
      [field]: e.target.value,
    });
  };

  const submitUser = (e) => {
    e.preventDefault();
    validateUser(user);
    e.target.reset();
  };

  return (
    <>
      <SignInContainer>
        <form className="sign-in-form" onSubmit={submitUser}>
          <span className="sign-in-title">Sing in</span>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" onChange={(e) => createUserDraft(e, 'username')} placeholder="Enter username" autoComplete="off" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => createUserDraft(e, 'password')} placeholder="Enter password" autoComplete="off" />
          <input className="sign-in-submit" type="submit" value="Submit" />
        </form>
        <div className="create-account">
          <div className="create-account-infobox">
            <span>You don't have an account?</span>
            <span>Create one using sign up button!</span>
          </div>
          <StyledLoginLink to="/registration">Sign up</StyledLoginLink>
        </div>
      </SignInContainer>
    </>
  );
};

export default SignIn;
