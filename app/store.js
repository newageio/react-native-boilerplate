import { createStore, applyMiddleware } from 'redux';
import reducer from './redurcers';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';

export default createStore(reducer, applyMiddleware(apiMiddleware, createLogger()));

