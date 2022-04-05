import React from 'react';
import insta from '../assets/img/insta.png';
import {Button, Container, Form} from "react-bootstrap";
const Contact = () => {

    return (
        <div>
            <Container>
                <div className="contact">
                    <div className="contact__left">
                        <div className="contact__left__title">Contact us.</div>
                        <div className="contact__left__email">✉️ test@gmail.com</div>
                        <div className="contact__left__insta"><p><img  alt={'img'} src={insta} /> @insta</p></div>
</div>
                    <div className="contact__right">
            <Form className={'ContacForm'}>
<div className="form_flex">    <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"  />
    <Form.Label>First name</Form.Label>
                </Form.Group>
                    <Form.Group className="mb-3 ml-3" controlId="formBasicLastName">
                    <Form.Label className={'white'}>/</Form.Label>
                    <Form.Control type="text"  />
                    <Form.Label>Last Name</Form.Label>
                </Form.Group>
</div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"  />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message </Form.Label>
                    <textarea></textarea>
                </Form.Group>
                <div className="btn_form">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </div>
            </Form>

                </div>  </div>          </Container>


</div>
    );
};

export default Contact;