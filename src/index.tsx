import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';  // Importação nomeada

// Obtém a referência ao elemento root
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

// Renderiza o componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
