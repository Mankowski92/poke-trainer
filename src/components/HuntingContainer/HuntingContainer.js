import React from 'react';
import { StyledHuntingContainer } from './HuntingContainer.styles';
import DefaultContainer from '../Containers/DefaultContainer/DefaultContainer';

const HuntingContainer = () => {
  // const ctx = useContext(MainPokeAppContext);
  // const ctxLogin = useContext(LoginRegistrationContext)

  return (
    <>
      <DefaultContainer>
        <StyledHuntingContainer>
          <div className="main-screen">Ekran główny</div>
          <div className="user-interface">Ekwipunek i interfejs</div>
        </StyledHuntingContainer>
      </DefaultContainer>
    </>
  );
};

export default HuntingContainer;
