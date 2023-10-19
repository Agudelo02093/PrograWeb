import './style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './src/App'

const rootElemnt = document.getElementById('app')
const root = createRoot(rootElemnt)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)