import * as ReactDOMClient from 'react-dom/client'

import App from './App'

const rootElement = document.getElementById('root')
if (rootElement) ReactDOMClient.createRoot(rootElement).render(<App />)
