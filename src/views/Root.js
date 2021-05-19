import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from 'views/Dashboard';
import Pokedex from 'views/Pokedex';
import Hunting from 'views/Hunting';
import Login from 'views/Login';
import PokemonsProvider from 'providers/PokemonsProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PokemonsProvider>
          <Wrapper>
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
              <Route strict path="/">
                <Dashboard />
              </Route>
            </Switch>
          </Wrapper>
        </PokemonsProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
