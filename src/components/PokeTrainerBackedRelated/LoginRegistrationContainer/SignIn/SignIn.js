import React, { useContext, useEffect, useState } from 'react';
import { PokemonsContext } from '../../../../providers/PokemonsProvider';
import { SignInContainer, StyledLoginLink } from './SignIn.styles';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const ctx = useContext(PokemonsContext);

  const { validateUser } = useContext(PokemonsContext);
  const [user, setUser] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);

  const history = useHistory();
  // on login success: history.push('/home')

  const createUserDraft = (e, field) => {
    setUser({
      ...user,
      [field]: e.target.value,
    });
  };

  const submitUser = (e) => {
    e.preventDefault();
    validateUser(user);
    setUser({});
    e.target.reset();

    // 1. Display information about success login
    // 2. Inform about redirection
    // 3. Then history.push
    // history.push('/home')
  };

  useEffect(() => {
    handleTest();
  }, [ctx.responseData]);

  const handleTest = () => {
    if (ctx.responseData) {
      ctx.responseData.success === 1 ? setLoginSuccess(true) : setLoginSuccess(false);
    }
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
      {ctx.responseData && !loginSuccess ? (
        <>
          <div className="xyz">Login unsuccessful {ctx.responseData.msg}</div>
        </>
      ) : null}

      {loginSuccess ? (
        <>
          <div>Login successful! {ctx.responseData.msg}</div>
          {/*{setTimeout(() => {*/}
          {/*    history.push('/home')*/}
          {/*}, 4000)}*/}
        </>
      ) : null}
    </>
  );
};

export default SignIn;
