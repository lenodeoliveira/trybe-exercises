import { createStore, combineReducers } from 'redux';

const rootReducers = combineReducers({ reducerForm })

const store = createStore(rootReducers);

export default store;
