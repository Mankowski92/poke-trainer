import React, { useContext, useEffect, useState } from 'react';
import { PokemonsContext } from '../../../../providers/PokemonsProvider';
import { SignInContainer, StyledLoginLink, SuccessfulLoginContainer } from './SignIn.styles';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const ctx = useContext(PokemonsContext);

  const { validateUser } = useContext(PokemonsContext);
  const { handleSetUserLogged } = useContext(PokemonsContext);
  const [user, setUser] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);

  const history = useHistory();

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
  };

  // need to reset/change SignIn component after successful login

  useEffect(() => {
    if (loginSuccess) {
      loginSuccessAction();
    }
  }, [loginSuccess]);

  const loginSuccessAction = () => {
    setTimeout(() => {
      history.push('/home');
    }, 4000);
  };

  useEffect(() => {
    validateLoginSuccess();
  }, [ctx.responseData]);

  const validateLoginSuccess = () => {
    if (ctx.responseData) {
      ctx.responseData.success === 1 ? setLoginSuccess(true) : setLoginSuccess(false);
    }
  };

  return (
    <>
      {!loginSuccess ? (
        <SignInContainer>
          <button onClick={() => handleSetUserLogged()}>Set Logged</button>
          <div>{ctx.loadingRequired}</div>
          <form className="sign-in-form" onSubmit={submitUser}>
            <span className="sign-in-title">Sing in</span>
            <label htmlFor="name">Username</label>
            <input type="text" id="name" onChange={(e) => createUserDraft(e, 'username')} placeholder="Enter username" autoComplete="off" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => createUserDraft(e, 'password')} placeholder="Enter password" autoComplete="off" />
            <input className="sign-in-submit" type="submit" value="Submit" />
          </form>
          {ctx.responseData && !loginSuccess ? (
            <>
              <div className="login-fail-warning">Login unsuccessful {ctx.responseData.msg}</div>
            </>
          ) : null}
          <div className="create-account">
            <div className="create-account-infobox">
              <span>You don't have an account?</span>
              <span>Create one using sign up button!</span>
            </div>
            <StyledLoginLink to="/registration">Sign up</StyledLoginLink>
          </div>
        </SignInContainer>
      ) : (
        <SuccessfulLoginContainer>
          <div className="main-wraper">
            <span>Login successful!</span>
            <span>{ctx.responseData.msg}</span>
            <span>Redirecting to home page...</span>
          </div>
        </SuccessfulLoginContainer>
      )}
    </>
  );
};

export default SignIn;
