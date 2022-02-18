import React, { useContext, useState } from 'react';
import DefaultContainer from '../../../Containers/DefaultContainer/DefaultContainer';
import { MainPokeAppContext } from '../../../../providers/MainPokeAppContext';
import { LoginRegistrationContext } from '../../../../providers/LoginRegistrationContext';
import { LoginContainer, SuccessfulUserCreateContainer } from './SignUp.styles';

const SignUp = () => {
  const ctx = useContext(MainPokeAppContext);
  const ctxLogin = useContext(LoginRegistrationContext);

  const { registerUser } = useContext(LoginRegistrationContext);
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

  // need to implement action on success sign up

  return (
    <>
      <DefaultContainer>
        {ctxLogin.responseData && ctxLogin.responseData.success === 1 ? (
          <SuccessfulUserCreateContainer>
            <div className="main-wrapper">
              <span>Success!</span>
              <span>{ctxLogin.responseData.msg}</span>
            </div>
          </SuccessfulUserCreateContainer>
        ) : (
          <LoginContainer>
            <form className="sign-up-form" onSubmit={submitUser}>
              <span className="sign-up-title">Sing up</span>
              <label htmlFor="name">Username</label>
              <input type="text" id="name" onChange={(e) => addNewUser(e, 'username')} placeholder="Enter username" autoComplete="off" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={(e) => addNewUser(e, 'password')} placeholder="Enter password" autoComplete="off" />
              <label htmlFor="password">Confirm password</label>
              <input
                type="password"
                id="confirmPassword"
                onChange={(e) => addNewUser(e, 'confirmPassword')}
                placeholder="Confirm password"
                autoComplete="off"
              />
              <input className="sign-up-submit" type="submit" value="Submit" />
              {ctxLogin.responseData ? (
                <>
                  <div className="">{ctxLogin.responseData.msg}</div>
                </>
              ) : null}
            </form>
          </LoginContainer>
        )}
      </DefaultContainer>
    </>
  );
};

export default SignUp;
