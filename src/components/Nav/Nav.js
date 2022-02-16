import React, { useContext } from 'react';
import { StyledLink, StyledNavList } from './Nav.styles';
import { MainPokeAppContext } from '../../providers/MainPokeAppContext';
import { LoginRegistrationContext } from '../../providers/LoginRegistrationContext';

const Nav = () => {
  const ctx = useContext(MainPokeAppContext);
  const ctxLogin = useContext(LoginRegistrationContext);

  return (
    <>
      <StyledNavList>
        <StyledLink exact to="/">
          Home
        </StyledLink>
        <StyledLink to="/pokedex">Pokedex</StyledLink>
        <StyledLink to="/hunting">Go hunt</StyledLink>
        {ctx.isUserLogged ? <StyledLink to="/account">Account</StyledLink> : <StyledLink to="/login">Login</StyledLink>}
      </StyledNavList>
    </>
  );
};

export default Nav;
