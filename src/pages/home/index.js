import React, { Component } from 'react'
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

import List from './component/List'; 
import Writer from './component/Writer'; 
import Recommend from './component/Recommend';
import Topic from './component/Topic';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { stat } from 'fs';

class Home extends Component {
    handlerScrollTop(){
        window.scrollTo(0,0);
    }
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
                {
                    this.props.showScroll ?   <BackTop onClick = {this.handlerScrollTop}>顶部</BackTop> : null
                }
              
            </HomeWrapper>
        );
    };

    componentDidMount(){
       this.props.changeHomeData();
       this.bindEvents();
    }

    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
};

const mapDispatch = (dispatch) => ({
    changeHomeData(){
       const action = actionCreators.getHomeInfo();
       dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 400){
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});

const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})

export default connect(mapState, mapDispatch)(Home);