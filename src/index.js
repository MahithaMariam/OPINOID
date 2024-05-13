import React from 'react';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( 
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
