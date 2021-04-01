import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './nav.css';
import logo from '../../assets/images/logo.png'

const NavComponent = () =>{
    
    return(
        <div className="main">
          <Container fluid className="mynav" sticky="top">    
                <Navbar expand="lg" className="sticky-top">
                    <Navbar.Brand href="#home">
                        <img src={ logo } height="60" className="yoya-logo" alt="yoya consultancy logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end ml-auto" defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li" className="mylinks">
                                <Nav.Link className="mylink" href="/home">Home</Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="mylinks">
                                <Nav.Link className="mylink" eventKey="link-1">Services</Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="mylinks">
                                <Nav.Link className="mylink" eventKey="link-2">Careers</Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="mylinks">
                                <Nav.Link className="mylink" eventKey="link-2">Who we are</Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="mylinks">
                                <Nav.Link className="mylink" eventKey="link-2">Our Products</Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="mylinks">
                                <Nav.Link className="mylink" eventKey="link-2">Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>  
        </div>
    )
}





export default NavComponent;