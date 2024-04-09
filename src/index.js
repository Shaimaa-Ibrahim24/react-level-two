import {ThemeProvider} from "./context/ThemeContext";
import ReactDOM from 'react-dom/client';
import React from 'react'
import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <ThemeProvider>
  <App/>
  </ThemeProvider>
  </HelmetProvider>
  </React.StrictMode>
  
  
);



