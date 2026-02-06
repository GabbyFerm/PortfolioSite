import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeProvider.tsx';

// Add dev-mode class in development
if (import.meta.env.DEV) {
  document.body.classList.add('dev-mode');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
