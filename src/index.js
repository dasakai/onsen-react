import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
