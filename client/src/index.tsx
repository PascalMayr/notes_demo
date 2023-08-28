import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AppContextProvider } from './context/AppContext'

import './styles/global.sass'

const domNode = document.getElementById('root') as HTMLElement
const root = createRoot(domNode)

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
)
