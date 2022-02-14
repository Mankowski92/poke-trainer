import React from 'react';
import { StyledDefaultContainer } from './DefaultContainer.styles';
import Nav from '../../Nav/Nav';

const DefaultContainer = ({ children }) => {
  return (
    <>
      <Nav />
      <StyledDefaultContainer>{children}</StyledDefaultContainer>
    </>
  );
};

export default DefaultContainer;
