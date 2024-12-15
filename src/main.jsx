import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { ThemeProvider } from './components/Theme/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> 
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </StrictMode>,
)
