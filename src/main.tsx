import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ApplicationRoutes from './routes/ApplicationRoutes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApplicationRoutes />
  </React.StrictMode>,
)
