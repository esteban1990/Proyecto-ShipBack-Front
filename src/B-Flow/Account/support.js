import React, { useContext, useState } from 'react';
import { Context } from "../../store/AppContext.js";
import { Link } from "react-router-dom";
import './account.css';

import { Form, Button, Col, InputGroup } from 'react-bootstrap'
import NavBar from '../NavBar/navBar.js';



const Support = (props) => {

    const { store, actions } = useContext(Context);

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
            <div className='Support'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ width: '80%', padding: '10px', border: 'solid 2px', borderRadius: '10px' }}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label className="padding-left">Reason</Form.Label>
                            <Form.Control className="padding-left" require as="select">
                                <option>Create an order</option>
                                <option>Track an order</option>
                                <option>Filters</option>
                                <option>Other</option>
                            </Form.Control>
                            <Form.Group>
                                <Form.File
                                    className="attached-file padding-left"
                                    id="custom-file"
                                    label="Attach a screenshot or other file"
                                    custom
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="padding-left">Description</Form.Label>
                                <Form.Control
                                    className="padding-left"
                                    as="textarea"
                                    required />
                            </Form.Group>
                            <Form.Control.Feedback type="invalid">
                                Please insert a description.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        </Form.Group>
                    </Form.Row>
                    <Button className="support-button" type="submit">Submit form</Button>
                </Form>
            </div>
        </div>
    );
}

export default Support;