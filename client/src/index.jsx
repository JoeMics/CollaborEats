import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <main className="dark:bg-dark-900 bg-white transition-all">
        <AuthProvider>
          <App />
        </AuthProvider>
      </main>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
