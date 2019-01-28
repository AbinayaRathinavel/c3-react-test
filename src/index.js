import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const rootElement = document.getElementById('root');

render ( 
  <App />, 
  rootElement
);
registerServiceWorker();
