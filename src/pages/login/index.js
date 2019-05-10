import React, { PureComponent } from 'react'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
    //this.props.match.params.id

    render(){
            const { loginStatus } = this.props;
            if(!loginStatus){
            
                return (
                    <LoginWrapper>
                        <LoginBox>
                            <Input placeholder='账号' ref = {(input) => {this.account = input}}/>
                            <Input placeholder='密码' ref = {(input) => {this.password = input}} type = 'passwrod'/>
                            <Button onClick = {() => this.props.login(this.account, this.password)} >登陆</Button>
                        </LoginBox>
                    </LoginWrapper>

                );      
        } else {
            return <Redirect to = '/' />
        }
    }

};

const mapState = (state) => ({
   loginStatus: state.get(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => ({
   login(account, password){
        dispatch(actionCreators.login(account.value, password.value));
   }
});

export default connect(mapState, mapDispatchToProps)(Login);