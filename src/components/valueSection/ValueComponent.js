import React from 'react';
import { AiFillBulb } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { GiTimeBomb, GiEarthAmerica } from 'react-icons/gi'
import { FaPrayingHands, FaHandshake, FaPeopleCarry } from 'react-icons/fa'
import { Container, Row, Col, Image } from 'react-bootstrap';
import './value.css';
import team from '../../assets/images/team1.jpg'

const ValueComponent = () =>{
    let iconStyles = { color: "white", fontSize: "4em", backgroundColor:"#dc2127", borderRadius: "50%", padding: "20px", margin:"5px" };
    
    return(
        <Container className="values">
            <Row>
                <Col className="value-image">
                {/* <Image src={ team } fluid /> */}
                </Col>
                <Col className="our-values">
                    <div className="section-header">
                        <h3>Why Choose Us?</h3>
                    </div>
                    <div className="value" no-gutters>
                        <Row>
                            <Col md={2}><AiFillBulb className="shadow" style={ iconStyles }/></Col>
                            <Col md={10} className="value-text">
                            <h4>Innovation</h4>
                            <p>We are honest, ethical and fair in all our activities. We keep our word, deliver on our promises and acknowledge our mistakes</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}><FaPrayingHands className="shadow" style={ iconStyles }/></Col>
                            <Col md={10} className="value-text">
                            <h4>Devotion</h4>
                            <p>Time is a valuable commodity and a limited resource for everyone</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}><FaHandshake className="shadow" style={iconStyles }/></Col>
                            <Col md={10} className="value-text">
                            <h4>Client Worth</h4>
                            <p>Assigning clients a dollar value  has helped us reach sales goals and meet our growing customer base's needs</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}><FaPeopleCarry className="shadow" style={ iconStyles }/></Col>
                            <Col md={10} className="value-text">
                            <h4>Solidarity</h4>
                            <p>We focus and mind about every other person's wellbeing, we value our society</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}><IoIosPeople className="shadow" style={ iconStyles}/></Col>
                            <Col md={10} className="value-text">
                            <h4>Probity</h4>
                            <p>We have managed to keep with our other values through Honesty, Integrity and Uprightness</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}><GiTimeBomb className="shadow" style={ iconStyles }/></Col>
                            <Col md={10} className="value-text">
                            <h4>Adaptability</h4>
                            <p>Growth is one of our company’s cultural values, and we try to get people more comfortable with it by highlighting times we’ve made mistakes and how we’ve evolved as leaders to normalize it in company retrospectives</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2}>< GiEarthAmerica className="shadow" style={iconStyles}/></Col>
                            <Col md={10} className="value-text">
                            <h4>Social Responsibility</h4>
                            <p>We want to make a contribution to sustainable developments not only in our products but also in the way we do business</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}





export default ValueComponent;