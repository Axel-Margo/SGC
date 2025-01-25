import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './state/store.ts'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
<Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)