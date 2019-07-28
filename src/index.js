import React from 'react';
import ReactDOM from 'react-dom';
import Animations from './components/Animations';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Animations />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
