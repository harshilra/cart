import { configureStore } from '@reduxjs/toolkit';
import SingleStore from './SingleSlice';

// import thunk from 'redux-thunk'
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore({
  reducer: {
    store: SingleStore,
  }
})
