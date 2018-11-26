import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Root from "./components/Router.jsx";
import store from "./store";
import './index.css';
import './styles/landing.css';
import './styles/animations.css';
import './styles/mainSearch.css';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

serviceWorker.unregister();
