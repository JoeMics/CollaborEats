import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <main class="dark:bg-slate-700 bg-white transition-all">
        <AuthProvider>
          <App />
        </AuthProvider>
      </main>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
