/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectLogin from './selectors';
import messages from './messages';
import {ReactDOM, findDOMNode } from 'react-dom';
import { Button, ControlLabel, Form, FormControl, FormGroup, Panel,FieldGroup} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import { getMobileNo,checkUser,userdetails } from './actions';
//import { checkUser } from '../App/actions';



export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.props={
      isLogged:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUsername = this.getUsername.bind(this);

  }

  getUsername(event){
    this.setState({userName :event.target.value});
  }

  handleSubmit(event) {
        const username = this.state.userName;
        console.log("username",username)
        //const password = findDOMNod(this.refs.password)
        //const creds = { username: username.value.trim(), password: password.value.trim() }
       // browserHistory.push('/home');
       // this.props.onLoginClick(creds)
    }
  
  render() {
     const {errorMessage} = this.props
     const wellStyles = {margin: '0 auto 10px'}
     const panCen = {margin: 'auto',width:"50%"}

        return (
            
          <Panel header="Login" style={panCen} bsStyle="primary">

            <form>
       
          <ControlLabel>Mobile Number</ControlLabel>
          <input className="form-control" type="text" onChange={this.props.getUsername} placeholder="Enter text" ref="username" />
           <ControlLabel>Password </ControlLabel>
          <FormControl style={wellStyles} type="password" placeholder="Enter text" ref="password"/>
          <Button bsStyle="warning" onClick={this.props.handleSubmit} bsSize="large" block>Login</Button>
      </form>
          </Panel>
        )
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getUsername:PropTypes.func.isRequired,
  handleSubmit:PropTypes.func.isRequired,
  isLogged:React.PropTypes.String,

};

const mapStateToProps = createStructuredSelector({
  Login : makeSelectLogin(),
});


export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getUsername: (evt) => dispatch(getMobileNo(evt.target.value)),
    handleSubmit: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      //this.props.isLogged='gg';
     const  test =  dispatch(checkUser());
     console.log("testtest",test);
      //browserHistory.push('/home');
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);