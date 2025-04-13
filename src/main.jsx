
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom"
import { ScrollTop } from './components/ScrollTop.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ScrollTop/>
      <App />
  </BrowserRouter>
    
 
)
