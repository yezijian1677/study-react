import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],

    articleList: [],

    recommendList: []
});

//纯函数，固定输入就有固定输出
export default ( state = defaultState, action ) => {
    //reducer 告诉 store focued的值， 然后 store 去改变foucused的值
    //变成immutable对象了，会返回一个全新的对象，还是交还给state自己去修改
    switch(action.type){
        case 'change_home_data':
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        
        default:
            return state;

    }
}