import React from 'react';
import { Container, Image, FormControl, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosSend } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import yoya from '../../assets/images/logo.svg';
import './footer.css';

const FooterComponent = () =>{
    let iconStyles = { color: "white", fontSize: "1.5em" };

    return(
        <div>
            <Container fluid className="container-fluid footer-main">

                    <div className="logo">

                        <h2 className="head">Yoya Consultancy</h2>
                        <hr></hr>
                        <Image className="fort-logo" src={ logo } alt="fort-logo" />

                        <div className="address">
                        <p>P.O.Box 23, Lumumba Avenue</p>
                        <p>Phone: +256-783870616, +256-790790199</p>
                        <p>Email: yoya@yoyaconsultancy.com</p>
                        </div>

                    </div>


                    <div className="links">

                        <h2 className="head">Useful Links</h2>
                        <hr></hr>
                        <p> Consultancy</p>
                        <p> About Us</p>
                        <p> Contact Us</p>
                        <p>Team</p>
                        <p>Projects</p>

                    </div>

                    <div className="contact-us">
                    <h2 className="head"> Write to us</h2>
                        <hr></hr>
                    <InputGroup className="mb-3">
                        <FormControl className="write-field" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="basic-addon2" />

                        <InputGroup.Append className="button-send">
                            <InputGroup.Text className="write" id="basic-addon2">
                            <IoIosSend style={iconStyles} />
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    </div>
                    
        

                    {/* <div className="social">

                        <h2 className="head"> Social Media</h2>
                        <hr></hr>
                            <div className="fa-section">

                                <span className="social-link">
                                    <i className="facebook"><FaFacebookF /></i>
                                    <p>Facebook</p>
                                </span>

                                <span className="social-link">
                                    <i className="twitter"><FaTwitter /></i>
                                    <p>Twitter</p>
                                </span>

                                <span className="social-link">
                                    <i className="youtube"><FaYoutube /></i>
                                    <p>YouTube</p>
                                </span>

                                <span className="social-link">
                                    <i className="linkedin"><FaLinkedin /></i>
                                    <p>LinkedIn</p>
                                </span>
                                 
                                
                            </div>
            
                    </div> */}
    
            </Container>
                <span className="Yoya">
                    All rights reserved<Image src={ yoya } height="80" width="80" /><a  className="yoya" href="not-working"> YoyaConsultancy Uganda</a>
                 </span>
            
        </div>
    )
}





export default FooterComponent;