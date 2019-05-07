import * as constants from './constants'

const defaultState = {
    focused: false
};

//纯函数，固定输入就有固定输出
export default ( state = defaultState, action ) => {
    //reducer 告诉 store focued的值， 然后 store 去改变foucused的值
    if(action.type === constants.SEARCH_FOCUS){
        return {
            focused: true
        }
    }
    if(action.type === constants.SEARCH_BLUR){
        return {
            focused: false
        }
    }
    return state;
}