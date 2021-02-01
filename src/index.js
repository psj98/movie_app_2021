import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Play from './Play';

// 여러 개를 import 할 경우 App.js 안에 새로 만든 js파일을 import할 것

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// component : HTML을 반환하는 함수