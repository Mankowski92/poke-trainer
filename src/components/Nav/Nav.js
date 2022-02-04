import React from 'react';
import { StyledLink, StyledNavList } from './Nav.styles';

const Nav = () => {
  return (
    <>
      <StyledNavList>
        <StyledLink exact to="/">
          Home
        </StyledLink>
        <StyledLink to="/pokedex">Pokedex</StyledLink>
        <StyledLink to="/hunting">Go hunt</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/crud-demo">Crud demo</StyledLink>
      </StyledNavList>
    </>
  );
};

export default Nav;
