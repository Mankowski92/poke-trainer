import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import 'assets/styles/fonts.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PokemonsProvider from 'providers/PokemonsProvider';
import LocalProvider from './providers/LocalContext';

ReactDOM.render(
  <React.StrictMode>
    <PokemonsProvider>
      <LocalProvider>
        <Router>
          <Root />
        </Router>
      </LocalProvider>
    </PokemonsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
