import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const rootElement = document.getElementById('root')
if (rootElement)
  ReactDOMClient.createRoot(rootElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
