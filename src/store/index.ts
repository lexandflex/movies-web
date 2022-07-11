import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const middleware = [sagaMiddleware];

  const composeEnhancers =
    window.ENABLE_DEVTOOLS && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = configureStore({
    reducer: rootReducer,
    enhancers: [composeEnhancers(applyMiddleware(...middleware))],
  });

  return { store };
};

export default createStore;
