import React, {useState} from 'react'
import { Form, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import img from "./contact.jpg";
import logo from "./contact-bar.png"
import "../styles.css";

export default function Contacts() {

    let [query, setQuery] = useState({
        email: '',
        name: '',
        message: ''
    });

    let handleChange = (e) => {
        let name = e.target.name;
        let val1 = e.target.value;
        query[name] = val1;
        setQuery(query);
    }

    let save = (e) => {
        e.preventDefault();
        console.log(query);
        axios.post('https://sheet.best/api/sheets/00087a6a-a171-493f-a8ad-1adf457ccfb4', query)
        .then(response => {
            console.log(response);
        })
    }

    return (
        <Container>

            <Row>
                <Col>
                    <img src={img} alt="image"></img>
                </Col>
                <Col>
                    <img className="contact-icon" src={logo} alt="image"></img>
                    <Form className="contact" onSubmit = { save }>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" name="email" onChange={handleChange} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Label>Name</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default" >Name</InputGroup.Text>
                            <FormControl
                                required
                                name="name" onChange={handleChange}
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control required as="textarea" rows={3} name="message" onChange={handleChange} />
                        </Form.Group>
                        <Button onClick = { save } variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
