import React, { useContext, useEffect, useState } from 'react';
import { StyledHuntingContainer } from './HuntingContainer.styles';
import DefaultContainer from '../Containers/DefaultContainer/DefaultContainer';
import { HuntEqContext } from 'providers/HuntEqContext';

const HuntingContainer = () => {
  const ctxHunt = useContext(HuntEqContext);

  const { handleTest } = useContext(HuntEqContext);

  // const submitUser = (e) => {
  //     e.preventDefault();
  //     addPokeballs(newUser);
  //     e.target.reset();
  //     setNewUser({});
  // };

  return (
    <>
      <DefaultContainer>
        <StyledHuntingContainer>
          <div className="main-screen">
            <span>Ekran główny</span>
            <button onClick={() => handleTest()}>FIRE TEST</button>
          </div>
          <div className="user-interface">Ekwipunek i interfejs</div>
        </StyledHuntingContainer>
      </DefaultContainer>
    </>
  );
};

export default HuntingContainer;
