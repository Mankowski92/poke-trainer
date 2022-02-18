import React, { useContext, useEffect, useState } from 'react';
import DefaultContainer from '../../../Containers/DefaultContainer/DefaultContainer';
import { MainPokeAppContext } from 'providers/MainPokeAppContext';
import { LoginRegistrationContext } from 'providers/LoginRegistrationContext';
import { SignInContainer, StyledLoginLink, SuccessfulLoginContainer } from './SignIn.styles';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const ctx = useContext(MainPokeAppContext);
  const ctxLogin = useContext(LoginRegistrationContext);

  const { validateUser } = useContext(LoginRegistrationContext);
  const { handleClearResponseData } = useContext(LoginRegistrationContext);
  const { handleSetUserLogged } = useContext(MainPokeAppContext);
  const { handleSetGlobalUserName } = useContext(MainPokeAppContext);
  const [user, setUser] = useState({});

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

  useEffect(() => {
    if (!ctx.isUserLogged && ctxLogin.responseData) {
      validateLoginSuccess();
    }
  }, [ctxLogin.responseData]);

  const loginSuccessAction = async () => {
    handleSetUserLogged();
    handleSetGlobalUserName(ctxLogin.responseData.username);
    setTimeout(() => {
      history.push('/home');
      handleClearResponseData();
    }, 4000);
  };

  const validateLoginSuccess = () => {
    if (ctxLogin.responseData) {
      if (ctxLogin.responseData.success === 1) {
        loginSuccessAction();
      }
    }
  };

  return (
    <>
      <DefaultContainer>
        {ctx.isUserLogged === false ? (
          <SignInContainer>
            <form className="sign-in-form" onSubmit={submitUser}>
              <span className="sign-in-title">Sing in</span>
              <label htmlFor="name">Username</label>
              <input type="text" id="name" onChange={(e) => createUserDraft(e, 'username')} placeholder="Enter username" autoComplete="off" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={(e) => createUserDraft(e, 'password')} placeholder="Enter password" autoComplete="off" />
              <input className="sign-in-submit" type="submit" value="Submit" />
            </form>
            {ctxLogin.responseData && !ctx.isUserLogged ? (
              <>
                <div className="login-fail-warning">Login unsuccessful {ctxLogin.responseData.msg}</div>
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
            <div className="main-wrapper">
              <span>Login successful!</span>
              <span>{ctxLogin.responseData.msg}</span>
              <span>Redirecting to home page...</span>
            </div>
          </SuccessfulLoginContainer>
        )}
      </DefaultContainer>
    </>
  );
};

export default SignIn;
