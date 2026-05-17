import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Car from './components/Component1.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import * as bootstrap from "bootstrap";

// window.bootstrap = bootstrap;

createRoot(document.getElementById('root')).render(
    <App />
)
