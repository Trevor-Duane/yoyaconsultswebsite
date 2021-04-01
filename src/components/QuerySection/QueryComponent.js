import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './query.css';

const QueryComponent = () =>{
  
    return(
        <Container fluid className="the-fcontainer">

            <Form className="the-form">
                <h3 className="query-text">Have a query?</h3>
				<Form.Group controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Enter your name" />

				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
    				</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPhone">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control type="text" placeholder="+256-XXXXXXX" />
				</Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter your message here" rows={4} />
                </Form.Group>
				
				<Button className="button1" type="submit">
					Submit
  				</Button>
			</Form>
        </Container>
    )
}


export default QueryComponent;