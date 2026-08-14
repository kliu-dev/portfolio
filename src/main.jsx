import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './styles/theme.css'

import './styles/about.css'
import './styles/header.css'
import './styles/index.css'
import './styles/projects.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
