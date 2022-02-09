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
import Registration from 'views/Registration';
import { PokemonsContext, Provider } from '../providers/PokemonsProvider';
import { LoginRegistrationActions } from '../providers/LoginRegistrationActions';

const Root = () => {
  const location = useLocation();
  const ctx = useContext(PokemonsContext);
  const { resetPokedexOptions } = useContext(PokemonsContext);
  const data = LoginRegistrationActions();
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
        <Switch>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route path="/hunting">
            <Hunting />
          </Route>
          {/*need to fix provider duplicate. Probably move this and merge provider into one*/}
          <Route path="/login">
            <Provider value={data}>
              <Login />
            </Provider>
          </Route>
          <Route path="/registration">
            <Provider value={data}>
              <Registration />
            </Provider>
          </Route>
          <Route strict path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
