import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from 'views/Dashboard';
import PokePedia from 'views/PokePedia';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Switch>
            <Route path="/pokepedia">
              <PokePedia />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
