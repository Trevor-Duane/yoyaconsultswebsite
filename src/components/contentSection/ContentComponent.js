import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import {Animated} from "react-animated-css";
// import Slider from "react-slick";
import './content.css';
// import logo from '../../assets/images/logo.png'

const ContentComponent = () =>{
    const options ={
            loop:true,
            margin:0,
            dots:false,
            nav:true,
            autoplaySpeed: 10,
            mouseDrag:false,
            autoplay:true,
            // animateOut: 'slideOutUp',
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        
        
    };
    
    return(
        <Container fluid no-gutters className="the-container">
                    <header>
                        <OwlCarousel {...options} className="owl-carousel owl-theme">  
                                    <div className="item">
                                        <img src="https://cdn.pixabay.com/photo/2014/04/15/16/53/reichstag-324982_960_720.jpg" alt="images not found" />
                                        <div className="cover">
                                            <div className="container">
                                                <div className="header-content">
                                                    <Animated animationIn="fadeInLeft"><div className="line"></div></Animated>
                                                    <Animated animationIn="fadeInDown"><h2>Effective and transparent governance with</h2></Animated>
                                                    <Animated animationIn="fadeInDown"><h1>E-Government Frameworks</h1></Animated>
                                                    <Animated animationIn="fadeInUp"><h4>to help bridge the gap between the government and the public</h4></Animated>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                    
                                    <div className="item">
                                        <img src="https://cdn.pixabay.com/photo/2021/01/03/20/43/money-5885626_960_720.jpg" alt="images not found" />
                                        <div className="cover">
                                            <div className="container">
                                                <div className="header-content">
                                                    <Animated animationIn="bounceInLeft"><div className="line animated bounceInLeft"></div></Animated>
                                                    <h2>Taxpayer registration, assessment, billing and payments with</h2>
                                                    <h1>E-Revenue/ Tax administration</h1>
                                                    <h4>Ensuring compliance and enforcement of the tax laws and regulations</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                
                                    <div className="item">
                                        <img src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_960_720.jpg" alt="images not found" />
                                        <div className="cover">
                                            <div className="container">
                                                <div className="header-content">
                                                    <Animated animationIn="bounceInLeft"><div className="line animated bounceInLeft"></div></Animated>
                                                    <h2>Re-imagine digital experience with</h2>
                                                    <h1>E-Project</h1>
                                                    <h4>ICT applications for institutional or organizational purposes</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src="https://cdn.pixabay.com/photo/2018/09/25/09/17/sale-3701777_960_720.jpg" alt="images not found" />
                                        <div className="cover">
                                            <div className="container">
                                                <div className="header-content">
                                                    <Animated animationIn="fadeInLeft"><div className="line"></div></Animated>
                                                    <Animated animationIn="fadeInDown"><h2>Instant accurate property assessment with</h2></Animated>
                                                    <Animated animationIn="fadeInDown"><h1>E-Valuation</h1></Animated>
                                                    <Animated animationIn="fadeInUp"><h4>We provide computer aided accurate assessment and physical states of properties</h4></Animated>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                    
                                    <div className="item">
                                        <img src="https://cdn.pixabay.com/photo/2020/03/25/11/43/administrate-4966980_960_720.jpg" alt="images not found" />
                                        <div className="cover">
                                            <div className="container">
                                                <div className="header-content">
                                                    <Animated animationIn="bounceInLeft"><div className="line animated bounceInLeft"></div></Animated>
                                                    <h2>Issuing development,control,demolition permits and other permits with</h2>
                                                    <h1>E-Permit</h1>
                                                    <h4>An electronic method of issuing permits to help you get quickly done or started</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                
                                    <div className="item">
                                        <img src="https://cdn.pixabay.com/photo/2016/03/22/00/45/multi-storey-car-park-1271918_960_720.jpg" alt="images not found" />
                                        <div className="cover">
                                            <div className="container">
                                                <div className="header-content">
                                                    <Animated animationIn="bounceInLeft"><div className="line animated bounceInLeft"></div></Animated>
                                                    <h2>Efficient, simple electronic parking systems</h2>
                                                    <h1>E-Parking</h1>
                                                    <h4>To help drivers and customers find an easy and quick space to park their vehicle</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src="https://cdn.pixabay.com/photo/2015/05/28/14/38/ux-787980_960_720.jpg" alt="images not found" />
                                        <div className="cover">
                                            <div className="container">
                                                <div className="header-content">
                                                    <Animated animationIn="fadeInLeft"><div className="line"></div></Animated>
                                                    <Animated animationIn="fadeInDown"><h2>Mobile and Ubiquitous computing with</h2></Animated>
                                                    <Animated animationIn="fadeInDown"><h1>Mobile and ICT applications</h1></Animated>
                                                    <Animated animationIn="fadeInUp"><h4>Design and build applications that run on mobile devices such as smartphones or tablets</h4></Animated>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                    
                                    <div className="item">
                                        <img src="https://cdn.pixabay.com/photo/2016/10/18/15/13/ec-cash-1750490_960_720.jpg" alt="images not found" />
                                        <div className="cover">
                                            <div className="container">
                                                <div className="header-content">
                                                    <Animated animationIn="bounceInLeft"><div className="line animated bounceInLeft"></div></Animated>
                                                    <h2>Paying for services and goods on the internet</h2>
                                                    <h1>E-Payment Services</h1>
                                                    <h4>It includes all financial operations using electronic devices, such as computers, smartphones or tablets</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                
                                    
                        </OwlCarousel>
                    </header>   
        </Container>
    )
}


export default ContentComponent;