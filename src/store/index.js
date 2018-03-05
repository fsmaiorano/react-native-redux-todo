import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const middleware = [];

const createApproprieateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createApproprieateStore(reducers, applyMiddleware(...middleware));

export default store;
