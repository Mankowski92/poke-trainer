import React from 'react';
import { StyledNavList, StyledLink } from './Nav.styles';

const Nav = () => {
  return (
    <>
      <StyledNavList>
        <StyledLink to="/pokedex">Pokedex</StyledLink>
        <StyledLink to="/gohunt">Go hunt</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </StyledNavList>
    </>
  );
};

export default Nav;
