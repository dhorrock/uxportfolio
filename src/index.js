import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif', 'Cormorant Garamond:300'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
