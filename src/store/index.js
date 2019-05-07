import { createStore} from 'redux';
import reducer from './reducer';

// 需要一个reducer
const store = createStore(reducer);

export default store;