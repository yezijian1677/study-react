import { createStore, compose } from 'redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 需要一个reducer
const store = createStore(reducer, composeEnhancers());

export default store;