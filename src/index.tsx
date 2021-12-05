import { configureStore } from '@reduxjs/toolkit';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { rootReducer } from './store/root-reduser';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { createAPI } from './services/api';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
