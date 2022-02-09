import React from 'react';
import Nav from '../../Nav/Nav';
import { StyledDefaultContainer } from './DefaultContainer.styles';

const DefaultContainer = ({ children }) => {
  return (
    <>
      <Nav />
      <StyledDefaultContainer>{children}</StyledDefaultContainer>
    </>
  );
};

export default DefaultContainer;
