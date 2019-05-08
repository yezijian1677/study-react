import React, { Component } from 'react'
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

import List from './component/List'; 
import Writer from './component/Writer'; 
import Recommend from './component/Recommend';
import Topic from './component/Topic';
import axios  from 'axios';
import { connect } from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/range';

class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt = '' className = 'banner-img' src = "https://upload.jianshu.io/admin_banners/web_images/4658/ef2cf6b3478da3cb7482f228212ecb59603fd408.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        );
    };

    componentDidMount(){
        axios.get('/api/home.json').then( (res) => {
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }
            this.props.changeHomeData(action);

        });
    }
};

const mapDispatch = (dispatch) => ({
    changeHomeData(action){
       dispatch(action);
    }
})

export default connect(null, mapDispatch)(Home);