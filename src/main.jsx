import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '/home/gabriel/Escritorio/Parcial 2/P1-React/P1-React/src/components/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
