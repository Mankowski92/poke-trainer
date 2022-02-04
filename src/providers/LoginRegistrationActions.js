import { useState } from 'react';

export const LoginRegistrationActions = () => {
  let [users, setUsers] = useState([]);
  let [userLength, setUserLength] = useState(null);

  const insertUser = (newUser) => {
    fetch('http://192.168.64.2/poke-trainer-backend/login-registration/register-user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id) {
          setUsers([
            {
              id: data.id,
              ...newUser,
            },
            ...users,
          ]);
          setUserLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    users,
    insertUser,
    userLength,
  };
};
