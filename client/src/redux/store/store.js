import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';

// const store = configureStore({
//   reducer: rootReducer,
//   // Additional configuration options go here
// });

// export default store;