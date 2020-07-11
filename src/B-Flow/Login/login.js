import React, { useState } from 'react';
import './login.css';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import { ReactComponent as ReactLogo } from '../../imagenes/Logo.svg';
import { Context } from "../../store/AppContext";

const urlapi = process.env.REACT_APP_APIURL || ''

export default class LoginScreen extends React.Component {
  constructor() {
      super();
      this.state = {
      }
  }

  render() {
      return (
          <Context.Consumer>
              {
                  ({ store, actions }) => {
                    return (
                      <div className='body'>
                        <Form onSubmit={(e) => actions.login(e, this.props.history)} className='login-form pt-5'> //revisar create order
                          <div className='logo'>
                            <ReactLogo />
                          </div>
                          <div className='p-2'>
                            <FormGroup>
                              <div className='p-2'>
                                <Label>Email</Label>
                                <Input type='email' id="email" name='email' placeholder='Email' required onChange={e => actions.handleChangeRegistration(e)}/>
                              </div>
                              <div className='p-2'>
                                <Label>Enter your password</Label>
                                <Input type='password' id="password" name='password' placeholder='Password' required onChange={e => actions.handleChangeRegistration(e)}/>
                              </div>
                            </FormGroup>
                            <Button type='submit' className='btn-lg btn-dark btn-block' name="action">Log in</Button>
                            <div className></div>
                          </div>
                          <div className='text-center'>
                            <div className='p-2'>
                              <a href='/signup'>Sign up</a>
                              <span className='p-2'>|</span>
                              <a href='/forgot-password'>Forgot Password?</a>
                              <span className='p-2'>|</span>
                              <a href='/gmail_login'>Log in with gmail</a>
                            </div>
                          </div>
                        </Form>
                      </div>
                    );
                  }}
          </Context.Consumer>
      );
  }
}