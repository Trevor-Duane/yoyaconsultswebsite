import React from 'react';
// import { FaFacebook, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './teamS.css';
// import logo from '../../assets/images/logo.png'

const TeamComponent = () =>{
    
    return(
        <div>
            <Container fluid className="team-section">
                <h2><span className="highlight_secondary">Our</span> Team</h2>
                <h5>Our people are our greatest asset and biggest differentiator.<br></br>They also believe in having a lot of fun along the way.</h5>
                <div className="hr big_size_hr invisible_hr">
                    {/* <i className="fa fa-"></i> */}
                </div>
              
                <Row className="row yoya-team">
                      <Col md={3} sm={4} xs={6}>
                        <div className="team">
                          <div className="team-image">
                              <a href="dummylink.html">
                                  <Image src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" thumbnail fluid roundedCircle />
                              </a>
                              <div className="team-links">
                                {/* <div className="team-links-list">
                                    <FaFacebook />
                                    <FaEnvelope />
                                    <FaLinkedin />
                                    <FaTwitter />
                                </div> */}
                              </div>
                          </div>
                          <div className="team-content">
                              <div className="team-name"><a className="name-link" href="dummylink.html"><h5>Tumusiime Frank</h5></a></div>
                              <div className="team-role">Role Here</div>
                              <div className="team-description"></div>
                          </div>
                        </div>
                      </Col>

                      <Col md={3} sm={4} xs={6}>
                        <div className="team">
                          <div className="team-image">
                            <a href="dummylink.html">
                              <Image src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" thumbnail fluid roundedCircle/>
                            </a>
                            <div className="team-links">
                              {/* <div className="team-links-list">
                                  <FaFacebook />
                                  <FaEnvelope />
                                  <FaLinkedin />
                                  <FaTwitter />
                              </div> */}
                            </div>
                          </div>
                          <div className="team-content">
                              <div className="team-name"><a className="name-link" href="dummylink.html"><h5>Khawa Agnes</h5></a></div>
                              <div className="team-role">Role Here</div>
                              <div className="team-description"></div>
                          </div>
                        </div>
                      </Col>

                      <Col md={3} sm={4} xs={6}>
                        <div className="team">
                          <div className="team-image">
                            <a href="dummylink.html">
                              <Image src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" thumbnail fluid roundedCircle />
                            </a>
                            <div className="team-links">
                              {/* <div className="team-links-list">
                                  <FaFacebook />
                                  <FaEnvelope />
                                  <FaLinkedin />
                                  <FaTwitter />
                              </div> */}
                            </div>
                          </div>
                          <div className="team-content">
                            <div className="team-name"><a className="name-link" href="dummylink.html"><h5>Rebecca Akandinda</h5></a></div>
                            <div className="team-role">Role Here</div>
                            <div className="team-description"></div>
                          </div>
                        </div>
                      </Col>
                </Row>

                <div className="hr invisible_hr">
                    <i className="fa fa-"></i>
                </div>

                <Row className="row">

                  <Col md={2} sm={4} xs={6}>
                    <div className="team">
                      <div className="team-image">
                        <a href="dummylink.html">
                          <Image src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" thumbnail fluid roundedCircle/>
                        </a>
                        <div className="team-links">
                          {/* <div className="team-links-list">
                              <FaFacebook />
                              <FaEnvelope />
                              <FaLinkedin />
                              <FaTwitter />
                            </div> */}
                        </div>
                      </div>
                      <div className="team-content">
                        <div className="team-name"><h5>Thomas Baguma</h5></div>
                        <div className="team-role">Systems Analyst</div>
                        <div className="team-description"></div>
                      </div>
                    </div>
                  </Col>

                  <Col md={2} sm={4} xs={6}>
                    <div className="team">
                      <div className="team-image">
                        <a href="dummylink.html">
                          <Image src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" thumbnail fluid roundedCircle/>
                        </a>
                        <div className="team-links">
                          {/* <div className="team-links-list">
                              <FaFacebook />
                              <FaEnvelope />
                              <FaLinkedin />
                              <FaTwitter />
                          </div> */}
                        </div>
                      </div>
                      <div className="team-content">
                        <div className="team-name"><h5>Irene Balinda</h5></div>
                        <div className="team-role">Systems Analyst</div>
                        <div className="team-description"></div>
                      </div>
                    </div>
                  </Col>

                  <Col md={2} sm={4} xs={6}>
                    <div className="team">
                      <div className="team-image">
                        <a href="dummylink.html">
                          <Image src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" thumbnail fluid roundedCircle />
                        </a>
                        <div className="team-links">
                          {/* <div className="team-links-list">
                              <FaFacebook />
                              <FaEnvelope />
                              <FaLinkedin />
                              <FaTwitter />

                          </div> */}
                        </div>
                      </div>
                      <div className="team-content">
                        <div className="team-name"><h5>Brian Ssemate</h5></div>
                        <div className="team-role">Software Developer</div>
                        <div className="team-description"></div>
                      </div>
                    </div>
                  </Col>

                  <Col md={2} sm={4} xs={6}>
                    <div className="team">
                      <div className="team-image">
                        <a href="dummylink.html">
                          <Image src="http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+" className="img-circle img-responsive" thumbnail fluid roundedCircle/>
                        </a>
                        <div className="team-links">
                          {/* <div className="team-links-list">
                              <FaFacebook />
                              <FaEnvelope />
                              <FaLinkedin />
                              <FaTwitter />
                          </div> */}
                        </div>
                      </div>
                      <div className="team-content">
                        <div className="team-name"><h5>Sirajje Bogere</h5></div>
                        <div className="team-role">Software Developer</div>
                        <div className="team-description"></div>
                      </div>
                    </div>
                  </Col>
            </Row>

            <div className="hr big_size_hr invisible_hr">
                <i className="fa fa-"></i>
            </div>


          </Container>    
        
</div>
    )
}





export default TeamComponent;