import React, { useState } from 'react';

export const LoginRegistrationActions = () => {
  const [responseData, setResponseData] = useState(null);

  const validateUser = (user) => {
    fetch('http://192.168.64.2/poke-trainer-backend/login-registration/authentication.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
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
    fetch('http://192.168.64.2/poke-trainer-backend/login-registration/register-user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
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
  return {
    validateUser,
    registerUser,
    responseData,
  };
};
