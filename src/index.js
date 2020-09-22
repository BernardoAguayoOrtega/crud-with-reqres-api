//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import global styles
import './GlobalStyles.css';
//import app component
import { App } from './components/App';
//import service worker
import * as serviceWorker from './utils/serviceWorker';

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);

// use the service worker
serviceWorker.register();
