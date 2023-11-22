import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'; 
import cacheMenu from './cacheMenu'

const reducers = combineReducers({cacheMenu})
const dev = process.env.NODE_ENV == 'development'
const reduxtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : () => null

export default createStore(reducers, compose(applyMiddleware(thunk), dev?reduxtools():null))
