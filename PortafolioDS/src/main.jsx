import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Header from "./components/Header.jsx"
import Inicio from './components/Inicio.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Inicio />
  </React.StrictMode>,
)
