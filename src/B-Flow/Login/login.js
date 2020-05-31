import React, { useState } from 'react';
import './login.css';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../imagenes/Logo.svg';
import { auth } from "../../FireBase/fireBase.js";

const LogIn = () => {

  const [user, setUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onLogIn = () => {
    console.log('Login')
    console.log(email, password)
  };

  auth.signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      console.log('error in login')
    });

    auth.onAuthStateChanged(function (user) {
      if(user){
        console.log('user is login')
        console.log(user)
        setUser(user)
      }else{
        console.log('not user is login')
      }
    })


  return (
    <div className='body'>
      <Form className='login-form pt-5'>
        <div className='logo'>
          <ReactLogo />
        </div>
        <div className='p-2'>
          <FormGroup>
            <div className='p-2'>
              <Label>Email</Label>
              <Input type='email' onChange={onEmailChange} id="email" name='email' placeholder='Email' />
            </div>
            <div className='p-2'>
              <Label>Enter your password</Label>
              <Input type='password' onChange={onPasswordChange} id="Password" name='password' placeholder='Password' />
            </div>
          </FormGroup>
          <Link to="/orders"><Button type='submit' onClick={onLogIn} className='btn-lg btn-dark btn-block'>Login</Button></Link>
          <div className></div>
        </div>
        <div className='text-center'>
          <div className='p-2'>
            <a href='/sign-up'>Sign up</a>
            <span className='p-2'>|</span>
            <a href='/sign-up'>Forgot Password?</a>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default LogIn;
