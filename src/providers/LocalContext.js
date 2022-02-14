import React, { useState } from 'react';

export const LocalContext = React.createContext({
  handleTest: () => {},

  testValue: 'This is test value',
});

const LocalProvider = ({ children }) => {
  const [testValue, setTestValue] = useState('This is test value');

  const handleTest = () => {
    setTestValue('NEW TEST VALUE');
    console.log('Test value changed');
  };

  return (
    <LocalContext.Provider
      value={{
        handleTest,
        testValue,
      }}
    >
      {children}
    </LocalContext.Provider>
  );
};
export default LocalProvider;
