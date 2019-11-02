import React from 'react';
import ReactDOM from 'react-dom';

import '@csstools/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
