import styled from 'styled-components'
import logoPic from '../../static/logo.png'

const HeaderWrapper = styled.div`
    height: 58px;
    border-bottom: 1px solid #F0F0F0;
`;

const Logo = styled.a`
    height: 56px;
    top: 0;
    left: 0;
    position: absolute;
    display: block;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`;

const Nav = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;
`;

const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

const SearchWrapper = styled.div`
   position: relative;
   float: left;
   .slide-enter {
        transition: all .2s ease-out;
   }
   .slide-enter-active {
        width: 240px;
   }
   .slide-exit{
        transition: all .2s ease-out;
   }
   .slide-exit-active{
       width: 160px;
   }
   .iconfont {
       position: absolute;
       right: 5px;
       bottom: 5px;
       width: 30px;
       line-height: 30px;
       border-radius: 15px;
       text-align: center;
       &.focused {
           background: #777;
           color: #fff;
       }
   }
`;

const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    margin-top: 9px;
    box-sizing: border-box;
    font-size: 14px;
    marigin-left: 20px;
    color: #777;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`;

const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    border-radius: 10px;
    border: 1px solid #ec6149;
    margin-right: 15px;
    padding: 0 20px;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`;

 
export {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
}