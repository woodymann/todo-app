import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import todos from './todos'

import './index.css';


ReactDOM.render(<App todos={todos} />, document.getElementById('root'));

