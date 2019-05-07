import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false
});

//纯函数，固定输入就有固定输出
export default ( state = defaultState, action ) => {
    //reducer 告诉 store focued的值， 然后 store 去改变foucused的值
    //变成immutable对象了，会返回一个全新的对象，还是交还给state自己去修改
    if(action.type === constants.SEARCH_FOCUS){
        return state.set('focused', true);
    }
    if(action.type === constants.SEARCH_BLUR){
        return state.set('focused', false);
    }
    return state;
}