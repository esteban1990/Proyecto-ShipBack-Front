import React, { useState } from "react";
import './signup.css';
import { ReactComponent as ReactLogo } from '../../imagenes/Logo.svg';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import './signup.css';
import { Context } from '../../store/AppContext';

const urlapi = process.env.REACT_APP_APIURL || ''

const SignUp = (props) => {
  return (
    <Context.Consumer>
    { ({store, actions}) => {
           return (
            <div className='body'>
              <Form className='login-form pt-5' onSubmit={(e) => actions.submitRegistration(e, props.history)}>
                <div className='logo'>
                  <ReactLogo />
                </div>
                <div className='p-2'>
                  <FormGroup>
                    <div className='p-2'>
                      <Label>First Name</Label>
                      <Input type='text' id="firstname" name='firstname' placeholder='First Name' required onChange={evento => actions.handleChangeRegistration(evento)}/>
                    </div>
                    <div className='p-2'>
                      <Label>Last Name</Label>
                      <Input type='text' id="lastname" name='lastname' placeholder='Last Name' required onChange={e => actions.handleChangeRegistration(e)}/>
                    </div>
                    <div className='p-2'>
                      <Label>Email</Label>
                      <Input type='email' id="email" name='email' placeholder='Email' required onChange={e => actions.handleChangeRegistration(e)}/>
                    </div>
                    <div className='p-2'>
                      <Label>Password</Label>
                      <Input type='password' id="password" name='password' placeholder='Password' required onChange={e => actions.handleChangeRegistration(e)}/>
                    </div>
                  </FormGroup>
                  <div>
                    <Button type='submit' className='btn-lg btn-dark btn-block' name="action">Signup</Button>
                  </div>
                </div>
              </Form>
            </div>
          );
    }} 
  </Context.Consumer>
  )
}

export default SignUp;