import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/app/styles/index.css'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
