import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SET_BG from './Components/SET_BG'
import App_navbar from './Components/App_navbar'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  // <React.StrictMode>
  <SET_BG specialClassName="h-100">
    <App_navbar/>
    <App />
  </SET_BG>
  // </React.StrictMode>
);