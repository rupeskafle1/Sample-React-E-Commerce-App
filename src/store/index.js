import { createStore } from 'redux';
import rootReducer from '../reducers';
import configureMiddleware from './middleware';

const store = () => createStore(rootReducer, configureMiddleware());
export default store;
