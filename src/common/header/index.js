import React from 'react';
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
        SearchWrapper
} from './style';

// 把return中的内容移动到一个函数里，把this指向删除，这样形成一个无状态组件
const Header = (props) => {
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
                        in = {props.focused}
                        timeout = {200}
                        classNames = "slide"
                    >   
                        <NavSearch
                            className = {props.focused ? 'focused' : ''}
                            onFocus = {props.handleInputFoucus}
                            onBlur = {props.handleInputBlur}
                            
                        >
                        </NavSearch>
                    </CSSTransition>
                        <i  className = {props.focused ? 'iconfont focused' : 'iconfont'} >&#xe637;</i>
                
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
    )
}

// 把仓库里的数据放入props映射
// 转换成immutable对象了
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
        //也可以是这个样子的，连写get可以用getIn代替
        // focused: state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFoucus(){
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);