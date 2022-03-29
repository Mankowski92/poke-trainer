import React, { useState } from 'react';

export const LoginRegistrationContext = React.createContext({
  handleClearResponseData: () => {},
  responseData: null,
});

const LoginRegistrationProvider = ({ children }) => {
  const [responseData, setResponseData] = useState(null);

  const handleClearResponseData = () => {
    setResponseData(null);
  };

  const validateUser = (user) => {
    fetch('http://localhost:81/poke-trainer-backend/login-registration/authentication.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data: ', data);
        if (data) {
          console.log('data: ', data);
          setResponseData(data);
        } else {
          alert('No data');
        }
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  const registerUser = (newUser) => {
    fetch('http://localhost:81/poke-trainer-backend/login-registration/register-user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setResponseData(data);
        } else {
          alert('No data');
        }
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  return (
    <LoginRegistrationContext.Provider
      value={{
        handleClearResponseData,
        validateUser,
        registerUser,
        responseData,
      }}
    >
      {children}
    </LoginRegistrationContext.Provider>
  );
};
export default LoginRegistrationProvider;
