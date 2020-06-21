import React, { Component } from 'react';
import './gmail.css';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../imagenes/Logo.svg';
import { auth } from "../../FireBase/fireBase.js";
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router';

export class Gmail_login extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }


  render() {
    return (
      <div className="body">
        <Form className='login-form pt-5'>
          <div className='logo'>
            <ReactLogo />
          </div>
          <p>Presione log-in para ingresar con su cuenta de Gmail.</p>
          <GoogleLogin className="google-button"
            clientId="533105464661-km3f5529ir7vorjhe56omfvmcc6rvlfa.apps.googleusercontent.com"
            buttonText="Log-in"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </Form>
      </div>
    )
  }
}

export default Gmail_login;
