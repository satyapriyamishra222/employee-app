import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import reportWebVitals from './reportWebVitals';

var state = { hasError: false };
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'), () => {
    if (state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
  }
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals("any");


