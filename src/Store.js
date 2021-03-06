import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const initialState = {};
const middleware = [thunk];
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    // initialState,
    // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

//composeEnhancer outdated so used composeWithDevTools instead 
//... means use everything, can pass in function 