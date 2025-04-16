import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { persistor, store } from './state/store.ts'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
 <Provider store={store}>
    <StrictMode>
      <PersistGate persistor={persistor} >
          <App />
      </PersistGate>
    </StrictMode>
 </Provider>
)