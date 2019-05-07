import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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
class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            focused: false
        };
        this.handleInputFoucus = this.handleInputFoucus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render() {
        return(
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
                            in = {this.state.focused}
                            timeout = {200}
                            classNames = "slide"
                        >   
                            <NavSearch
                                className = {this.state.focused ? 'focused' : ''}
                                onFocus = {this.handleInputFoucus}
                                onBlur = {this.handleInputBlur}
                                
                            >
                            </NavSearch>
                        </CSSTransition>
                            <i  className = {this.state.focused ? 'iconfont focused' : 'iconfont'} >&#xe637;</i>
                       
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

    handleInputFoucus(){
        this.setState({
            focused: true
        })
    }

    handleInputBlur(){
        this.setState({
            focused: false
        })
    }
}

export default Header;