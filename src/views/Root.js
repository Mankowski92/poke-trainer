import React, { useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { Route, Switch, useLocation } from 'react-router-dom';
import Dashboard from 'views/Dashboard';
import Pokedex from 'views/Pokedex';
import Hunting from 'views/Hunting';
import Login from 'views/Login';
import Account from 'views/Account';
import Registration from 'views/Registration';
import MainPokeAppProvider, { MainPokeAppContext } from '../providers/MainPokeAppContext';
import LoginRegistrationProvider from '../providers/LoginRegistrationContext';

const Root = () => {
  const location = useLocation();
  const ctx = useContext(MainPokeAppContext);
  const { resetPokedexOptions } = useContext(MainPokeAppContext);
  // Use effect made for temp logging actual path to further use
  useEffect(() => {
    console.log('Location changed for', location.pathname);
    if (ctx.currentPokedexOption) {
      resetPokedexOptions();
      console.log('Reset of current pokedex handle fired (list/random/find)');
    }
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <MainPokeAppProvider>
          <LoginRegistrationProvider>
            <Switch>
              <Route path="/pokedex">
                <Pokedex />
              </Route>
              <Route path="/hunting">
                <Hunting />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/account">
                <Account />
              </Route>
              <Route strict path="/">
                <Dashboard />
              </Route>
            </Switch>
          </LoginRegistrationProvider>
        </MainPokeAppProvider>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
