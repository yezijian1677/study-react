import React, { Component , Fragment} from 'react';
import { GlobalStyled } from './style';
import Header from './common/header';

class App extends Component {
  render(){
    return(
      <Fragment>
          <GlobalStyled />
          <Header/>
      </Fragment>
    );
  }
}

export default App;
