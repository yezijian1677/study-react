import React, { Component , Fragment} from 'react';
import { GlobalStyled } from './style';
import { GlobalStyledIcon } from './static/iconfont/iconfont';
import Header from './common/header';

class App extends Component {
  render(){
    return(
      <Fragment>
          <GlobalStyled />
          <GlobalStyledIcon />
          <Header/>
      </Fragment>
    );
  }
}

export default App;
