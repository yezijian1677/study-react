import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 2,
            title: '校园热点',
            imgUrl: 'https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        }
    ],

    articleList: [
        {
            id: 1,
            title: '流汗越多减肥越快？',
            desc: '流汗越多减肥越快？ 哈喽，大家好。我是你们的老朋友黄教练。 很多人理所当然的认为，流很多汗就一定能减肥。每次出了汗之后去体重秤上一站...',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14903703-16a13d1ed2831514.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '流汗越多减肥越快？',
            desc: '流汗越多减肥越快？ 哈喽，大家好。我是你们的老朋友黄教练。 很多人理所当然的认为，流很多汗就一定能减肥。每次出了汗之后去体重秤上一站...',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14903703-16a13d1ed2831514.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ]
});

//纯函数，固定输入就有固定输出
export default ( state = defaultState, action ) => {
    //reducer 告诉 store focued的值， 然后 store 去改变foucused的值
    //变成immutable对象了，会返回一个全新的对象，还是交还给state自己去修改
    switch(action.type){

        
        default:
            return state;

    }
}