import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],

    articleList: [],

    recommendList: [],

    articlePage: 1
});

//纯函数，固定输入就有固定输出
export default ( state = defaultState, action ) => {
    //reducer 告诉 store focued的值， 然后 store 去改变foucused的值
    //变成immutable对象了，会返回一个全新的对象，还是交还给state自己去修改
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            })
        default:
            return state;

    }
}