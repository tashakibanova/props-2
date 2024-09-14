// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// Функция для рендеринга приложения
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement // Указываем тип для `document.getElementById`
);

