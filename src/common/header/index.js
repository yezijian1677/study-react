import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
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

        const { focused, list, page, handleMouseEnter,
                handleMouseLeave, mouseIn, handleChangePage, 
                totalPage } = this.props;
        const pageList = [];
        const newList = list.toJS();
        
        if(newList.length){
            for(let i = (page -1) * 10; i < page*10; i++){
                pageList.push(
                  <SearchInfoItem key = {newList[i]} >{newList[i]}</SearchInfoItem>
                );
              }
        }

        if(focused || mouseIn){
            return (
                 <SearchInfo 
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                 >
                     <SearchInfoTitle>
                         搜索
                         
                         <SearchInfoSwitch onClick = { () => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref = { (icon) => {this.spinIcon = icon }} className = "iconfont spin">&#xe851;</i>
                             换一批
                         </SearchInfoSwitch>
                     </SearchInfoTitle>
                     <SearchInfoList>
                         {pageList}
                     </SearchInfoList>
                 </SearchInfo>
            );
         }else{
             return null;
         }
    }

    render(){
        const { focused, handleInputFoucus, handleInputBlur, list } = this.props;
        return (
                <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
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
                                onFocus = { () => handleInputFoucus(list)}
                                onBlur = {handleInputBlur}
                                
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i  className = {focused ? 'iconfont focused zoom' : 'iconfont zoom'} >&#xe637;</i>
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
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage'])
        //也可以是这个样子的，连写get可以用getIn代替
        // focused: state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFoucus(list){
            if(list.size === 0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },

        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        
        handleChangePage(page, totalPage, spin){
            let originAngele =  spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngele){
                originAngele = parseInt(originAngele, 10);
            } else {
                originAngele = 0;
            }
            spin.style.transform = 'rotate('+(originAngele+360)+'deg)';
            if(page < totalPage){
                dispatch(actionCreators.changePage(page+1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
            
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);