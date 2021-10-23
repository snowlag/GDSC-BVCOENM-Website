import React, { useState } from 'react'
//bootsrap
import { Form, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
//material ui
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

import "../styles.css";

export default function Contacts() {

    const [query, setQuery] = useState({
        email: '',
        name: '',
        message: ''
    });

    const [onFlight, setOnFlight] = useState(false)
    const [openSnackBar, setOpenSnackbar] = React.useState(false);
    const [formMessage , setFormMessage] = React.useState("")

    let handleChange = (e) => {
        let name = e.target.name;
        let val1 = e.target.value;
        setQuery({
            ...query,
            [name]: val1
        });
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                Close
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
            </IconButton>
        </React.Fragment>
    );

    const save = (e) => {
        e.preventDefault();
        const {name , email , message} = query
        console.log(query)
        if(name.length > 0 && email.length > 0 && message.length > 0){
            console.log(query);
            setOnFlight(true)
            axios.post('https://sheet.best/api/sheets/00087a6a-a171-493f-a8ad-1adf457ccfb4', query)
                .then(response => {
                    setQuery({
                        email: '',
                        name: '',
                        message: ''
                    })
                    setFormMessage("We got your message!")
                    setOnFlight(false)
                    setOpenSnackbar(true)
                })
                .catch(err => {
                    console.log(err)
                    setFormMessage("Sorry ,There was some issue , please try again")
                    setOnFlight(false)
                })

        }else{
            setFormMessage("Please fill all the fields")
            setOpenSnackbar(true)

        }   
    }
    return (
        <Container>
            <Row>
                <Col>
                    <img src="/images/contact.jpg" alt="image"></img>
                </Col>
                <Col>
                    <img className="contact-icon" src="/images/contact-bar.png" alt="image"></img>
                    <Form className="contact" onSubmit={save}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" name="email" value={query.email} onChange={handleChange} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Label>Name</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text  id="inputGroup-sizing-default" >Name</InputGroup.Text>
                            <FormControl
                                required
                                value={query.name}
                                name="name" onChange={handleChange}
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control value={query.message} required as="textarea" rows={3} name="message" onChange={handleChange} />
                        </Form.Group>
                        <Button onClick={save} disabled={onFlight} variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={6000}
                onClose={handleClose}
                message={formMessage}
                action={action}
            />
        </Container>
    )
}
