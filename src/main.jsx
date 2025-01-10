import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="pets">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
