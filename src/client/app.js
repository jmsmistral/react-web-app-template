import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'highlightjs/styles/github.css';
// import 'highlightjs/styles/monokai.css';
// import 'highlightjs/styles/monokai-sublime.css';
import 'highlight.js/styles/monokai-sublime.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';


ReactDOM.render(<AppRouter />, document.getElementById('app'));
