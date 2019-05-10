import React, { Component , Fragment} from 'react';
import { Provider } from 'react-redux'
import { GlobalStyled } from './style';
import { GlobalStyledIcon } from './static/iconfont/iconfont';
import Header from './common/header';
import store from './store/index';
import { BrowserRouter, Route } from 'react-router-dom';


import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

class App extends Component {
  render(){
    return(
      <Fragment>
          <GlobalStyled />
          <GlobalStyledIcon />
          {/* 把store提供给provider内部的组件 */}
          <Provider store = {store} >
            <BrowserRouter>
            <Header/>
              <div>
                <Route path='/' exact component = { Home }></Route>
                <Route path='/login' exact component = { Login }></Route>
                <Route path='/detail/:id' exact component = { Detail }></Route>
              </div>
            </BrowserRouter>
          </Provider>
      </Fragment>
    );
  }
}

export default App;
