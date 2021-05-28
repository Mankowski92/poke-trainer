import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import 'assets/styles/fonts.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PokemonsProvider from 'providers/PokemonsProvider';

ReactDOM.render(
  <React.StrictMode>
    <PokemonsProvider>
      <Router>
        <Root />
      </Router>
    </PokemonsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
