import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';

// 拆分reducers 把 header 的 数据放入header里的文件夹去
// 拿到header reducer 进行整合，同时数据里需要更改为你现在的名字
// 例如原来的时 state.focused 则需要变成 => state.header.focused
const reducer = combineReducers({
    header: headerReducer
});

export default reducer;