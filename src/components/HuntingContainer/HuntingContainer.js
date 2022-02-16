import React from 'react';
import { StyledHuntingContainer } from './HuntingContainer.styles';
import DefaultContainer from '../Containers/DefaultContainer/DefaultContainer';

const HuntingContainer = () => {
  // const ctx = useContext(MainPokeAppContext);
  // const ctxLogin = useContext(LoginRegistrationContext)

  return (
    <>
      <DefaultContainer>
        <StyledHuntingContainer>Hunting content</StyledHuntingContainer>
      </DefaultContainer>
    </>
  );
};

export default HuntingContainer;
