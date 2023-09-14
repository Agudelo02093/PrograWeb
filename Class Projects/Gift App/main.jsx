import './style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './src/App'

const rootElment = document.getElementById('app')
const root = createRoot(rootElment)
root.render(<App />)
