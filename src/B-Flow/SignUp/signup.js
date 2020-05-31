import React, { useState } from "react";
import './signup.css';
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from '../../imagenes/Logo.svg';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import { auth } from "../../FireBase/fireBase.js";
import './signup.css'


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);
  const onFnameChange = (event) => setfname(event.target.value);
  const onLnameChange = (event) => setlname(event.target.value);

  const onSignUp = () => {
    console.log('signup')
    console.log(email, password, fname, lname)
  };

  auth.createUserWithEmailAndPassword(email, password).catch(function (error){console.log('error in signup')});

  return (
    <div className='body'>
      <Form className='login-form pt-5'>
        <div className='logo'>
          <ReactLogo />
        </div>
        <div className='p-2'>
          <FormGroup>
            <div className='p-2'>
              <Label>First Name</Label>
              <Input type='text' onChange={onFnameChange} id="fname" name='fname' placeholder='First Name' />
            </div>
            <div className='p-2'>
              <Label>Last Name</Label>
              <Input type='text' onChange={onLnameChange} id="lname" name='lname' placeholder='Last Name' />
            </div>
            <div className='p-2'>
              <Label>Email</Label>
              <Input type='email' onChange={onEmailChange} id="email" name='email' placeholder='Email' />
            </div>
            <div className='p-2'>
              <Label>Password</Label>
              <Input type='password' onChange={onPasswordChange} id="Password" name='password' placeholder='Password' />
            </div>
          </FormGroup>
          <div>
          <Link to="/login"><Button onClick={onSignUp} type='submit' className='btn-lg btn-dark btn-block'>Signup</Button></Link>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;