import React, { useState } from "react";
import './signup.css';
import { ReactComponent as ReactLogo } from '../../imagenes/Logo.svg';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import './signup.css';

const urlapi = process.env.REACT_APP_APIURL || ''

const SignUp = (props) => {
  const [state, setState] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  })
  const handleChange = e => {
    e.preventDefault()
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
    if (state.name === "" || state.lastname === "" || state.email === "" || state.password === "") {
      alert("Se deben de llenar todos los campos")
      return;
    }
    fetch(urlapi + 'signup', {
      method: 'POST',
      body: JSON.stringify(state)
    }).then(response => response.json()).then(posts => {
      props.history.push('/login')
    })
  }


  return (
    <div className='body'>
      <Form className='login-form pt-5' onSubmit={handleSubmit}>
        <div className='logo'>
          <ReactLogo />
        </div>
        <div className='p-2'>
          <FormGroup>
            <div className='p-2'>
              <Label>First Name</Label>
              <Input type='text' id="fname" name='name' placeholder='First Name' required onChange={handleChange}/>
            </div>
            <div className='p-2'>
              <Label>Last Name</Label>
              <Input type='text' id="lname" name='lastname' placeholder='Last Name' required onChange={handleChange}/>
            </div>
            <div className='p-2'>
              <Label>Email</Label>
              <Input type='email' id="email" name='email' placeholder='Email' required onChange={handleChange}/>
            </div>
            <div className='p-2'>
              <Label>Password</Label>
              <Input type='password' id="Password" name='password' placeholder='Password' required onChange={handleChange}/>
            </div>
          </FormGroup>
          <div>
            <Button type='submit' className='btn-lg btn-dark btn-block'>Signup</Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;