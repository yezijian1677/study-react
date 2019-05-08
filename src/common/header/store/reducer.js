import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
});

//纯函数，固定输入就有固定输出
export default ( state = defaultState, action ) => {
    //reducer 告诉 store focued的值， 然后 store 去改变foucused的值
    //变成immutable对象了，会返回一个全新的对象，还是交还给state自己去修改
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            // return state.set('list', action.data).set('totalPage', action.totalPage);
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case constants.MOUSE_ENTER: 
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page)

        
        default:
            return state;

    }
}