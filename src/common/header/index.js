import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
        HeaderWrapper, 
        Logo,
        Nav,
        NavItem,
        NavSearch,
        Addition,
        Button,
        SearchWrapper,
        SearchInfo,
        SearchInfoTitle,
        SearchInfoSwitch,
        SearchInfoItem,
        SearchInfoList
} from './style';

// const getListArea = (show) => {
    
// }

class Header extends Component {
    getListArea(){

        const { focused, list } = this.props;

        if(focused){
            return (
                 <SearchInfo>
                     <SearchInfoTitle>
                         搜索
                         <SearchInfoSwitch>
                             换一批
                         </SearchInfoSwitch>
                     </SearchInfoTitle>
                     <SearchInfoList>
                         {
                             list.map( (item) => {
                                 return <SearchInfoItem key = {item} >{item}</SearchInfoItem>
                             })
                         }
                         
                     </SearchInfoList>
                 </SearchInfo>
            );
         }else{
             return null;
         }
    }

    render(){
        const { focused, handleInputFoucus, handleInputBlur } = this.props;
        return (
                <HeaderWrapper>
                <Logo href = '/' />
                <Nav>
                    <NavItem className = 'left active'>首页</NavItem>
                    <NavItem className = 'left'>下载</NavItem>
                    <NavItem className = 'right'>登陆</NavItem>
                    <NavItem className = 'right'>
                        <i className = "iconfont">&#xe636;</i>
                    </NavItem>

                    <SearchWrapper>
                        <CSSTransition
                            in = {focused}
                            timeout = {200}
                            classNames = "slide"
                        >   
                            <NavSearch
                                className = {focused ? 'focused' : ''}
                                onFocus = {handleInputFoucus}
                                onBlur = {handleInputBlur}
                                
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i  className = {focused ? 'iconfont focused' : 'iconfont'} >&#xe637;</i>
                      { this.getListArea() }
                    </SearchWrapper>

                </Nav>

                <Addition>
                    <Button className = 'writing'>
                        <i className = "iconfont">&#xe624;</i>
                        写文章
                    </Button>
                    <Button className = 'reg'>注册</Button>
                </Addition>

            </HeaderWrapper>
        );
    }
}

// 把return中的内容移动到一个函数里，把this指向删除，这样形成一个无状态组件
// const Header = (props) => {
//     return (
       
//     )
// }

// 把仓库里的数据放入props映射
// 转换成immutable对象了
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
        //也可以是这个样子的，连写get可以用getIn代替
        // focused: state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFoucus(){
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);