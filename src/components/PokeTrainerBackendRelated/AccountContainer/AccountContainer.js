import React, { useContext } from 'react';
import { StyledAccountContainer } from './AccountContainer.styles';
import DefaultContainer from '../../Containers/DefaultContainer/DefaultContainer';
import { MainPokeAppContext } from 'providers/MainPokeAppContext';

const AccountContainer = () => {
  const ctx = useContext(MainPokeAppContext);

  const { handleSetUserLoggedOut } = useContext(MainPokeAppContext);

  return (
    <>
      <DefaultContainer>
        <StyledAccountContainer>
          <h1>{ctx.globalUserName}</h1>
          <button onClick={() => handleSetUserLoggedOut()}>Log out</button>
        </StyledAccountContainer>
      </DefaultContainer>
    </>
  );
};

export default AccountContainer;
