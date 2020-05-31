import React, { useState } from 'react';
import { Form, Button, Col, InputGroup } from 'react-bootstrap'
import './createOrder.css';
import NavBar from '../../NavBar/navBar.js';


const CreateOrder = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='View'>
            <NavBar />
        <div className='createOrder'>
        <Form noValidate validated={validated} onSubmit={handleSubmit} style = {{ width: '80%', padding: '10px', border: 'solid 2px', borderRadius: '10px' }}>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
              </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
            </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
            </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>PostCode</Form.Label>
                    <Form.Control type="text" placeholder="PostCode" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
            </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Button type="submit">Submit form</Button>
        </Form>
        </div>
        </div>
    );
}

export default CreateOrder;