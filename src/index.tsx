import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import AppRouting from './routing';
import reportWebVitals from './reportWebVitals';
import appReducer from './store/reducers';

const root = document.getElementById('root');

if (root) {
  const appState: Store = createStore(appReducer, applyMiddleware(thunk));

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={appState}>
        <AppRouting />
      </Provider>
    </React.StrictMode>,
    root
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
