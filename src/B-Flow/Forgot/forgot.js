import React, { useState } from 'react';
import './forgot.css';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import { ReactComponent as ReactLogo } from '../../imagenes/Logo.svg';

const urlapi = process.env.REACT_APP_APIURL || ''

const Forgot = (props) => {
    const [state, setState] = useState({
      email: "",
      password: "",
      confirmPassword: "",
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
       if(state.email ==="" || state.password ===""){
           alert("Se deben de llenar todos los campos")
           return;
       }
      fetch(urlapi + 'login', {
          method: 'POST',
          body: JSON.stringify(state)
      }).then(response => response.json()).then(posts => {
          props.history.push('/orders')
      })
  }

  return (
    <div className='body'>
      <Form on onSubmit={handleSubmit} className='login-form pt-5'>
        <div className='logo'>
          <ReactLogo />
        </div>
        <div className='p-2'>
          <FormGroup>
            <div className='p-2'>
              <Label>Email</Label>
              <Input type='email' id="email" name='email' placeholder='Email' required onChange={handleChange}/>
            </div>
            <div className='p-2'>
              <Label>Enter your password</Label>
              <Input type='password' id="Password" name='password' placeholder='Password' required onChange={handleChange}/>
            </div>
            <div className='p-2'>
              <Label>Confirm your password</Label>
              <Input type='password' id="Password" name='confirmPassword' placeholder='Password' required onChange={handleChange}/>
            </div>
          </FormGroup>
          <Button type='submit' className='btn-lg btn-dark btn-block'>Confirm password</Button>
          <div className></div>
        </div>
        <div className='text-center'>
          <div className='p-2'>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Forgot;
