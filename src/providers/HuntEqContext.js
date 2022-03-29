import React, { useState, useEffect } from 'react';

export const HuntEqContext = React.createContext({
  handleClearResponseData: () => {},
  responseData: null,
});

const HuntEqProvider = ({ children }) => {
  const [responseData, setResponseData] = useState(null);

  const handleClearResponseData = () => {
    setResponseData(null);
  };

  const handleTest = () => {
    getEq();
    console.log('ADD 50 POKEBALLS');
  };

  let [users, setUsers] = useState([]);
  //userLength is for showing the Data Loading message.
  let [userLength, setUserLength] = useState(null);

  const getEq = () => {
    fetch('http://localhost:81/poke-trainer-backend/login-registration/eq.php')
      // .then((res) => console.log(res.json()))
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
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <HuntEqContext.Provider
      value={{
        handleClearResponseData,
        handleTest,
        // validateUser,
        // registerUser,
        responseData,
      }}
    >
      {children}
    </HuntEqContext.Provider>
  );
};
export default HuntEqProvider;
