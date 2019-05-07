import React, { Component , Fragment} from 'react';
import { Provider } from 'react-redux'
import { GlobalStyled } from './style';
import { GlobalStyledIcon } from './static/iconfont/iconfont';
import Header from './common/header';
import store from './store/index';


class App extends Component {
  render(){
    return(
      <Fragment>
          <GlobalStyled />
          <GlobalStyledIcon />
          {/* 把store提供给provider内部的组件 */}
          <Provider store = {store} >
            <Header/>
          </Provider>
      </Fragment>
    );
  }
}

export default App;
