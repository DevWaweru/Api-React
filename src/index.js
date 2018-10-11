import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FetchMovies from './components/fetch';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './components/fetch.css'

ReactDOM.render(<FetchMovies />, document.getElementById('root'));
registerServiceWorker();
