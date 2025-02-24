import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TodoProvider } from './TodoContext';
import { ChartProvider } from './TodoContext/ChartContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChartProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ChartProvider>
  </React.StrictMode>
);
// Se modificara el orden de encapzulamiento de los contextos para que el componente App pueda acceder a los dos contextos de manera correcta

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();