const defaultState = {
    focused: false
};

//纯函数，固定输入就有固定输出
export default ( state = defaultState, action ) => {
    //reducer 告诉 store focued的值， 然后 store 去改变foucused的值
    if(action.type === 'search_focus'){
        return {
            focused: true
        }
    }
    if(action.type === 'search_blur'){
        return {
            focused: false
        }
    }
    return state;
}