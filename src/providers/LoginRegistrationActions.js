export const LoginRegistrationActions = () => {
  const insertUser = (newUser) => {
    fetch('http://192.168.64.2/poke-trainer-backend/login-registration/authentication.php', {
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
        } else {
          alert('No data');
        }
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };
  return {
    insertUser,
  };
};
