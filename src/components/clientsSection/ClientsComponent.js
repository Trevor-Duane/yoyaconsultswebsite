import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Slider from "react-slick";
// import Carousel from 'react-elastic-carousel';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';
import image4 from '../../assets/images/4.jpg';
import image5 from '../../assets/images/5.jpg';
import image6 from '../../assets/images/6.jpg';
import image7 from '../../assets/images/7.jpg';
import image8 from '../../assets/images/8.jpg';
import image9 from '../../assets/images/9.jpg';
import image10 from '../../assets/images/10.jpg';
import image11 from '../../assets/images/10.png';
import './client.css';


const ClientsComponent = () =>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 1000,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    
    return(
        <Container fluid className="clients">
            <div>
                <h2> Our <span className="highlight_secondary">Clients</span> </h2>
                <Slider {...settings} className="clients-wrapper">

                <div>
                    <img src={ image1 } alt="kcca logo"/>
                </div>

                <div className="the-client">
                    <Image src={ image2 } alt="kcca logo" />
                </div>

                <div className="the-client">
                    <Image src={ image3 } alt="kcca logo" />
                </div>

                <div className="the-client">
                    <Image src={ image4} alt="kcca logo" />
                </div>

                <div className="the-client">
                    <Image src={ image5} alt="kcca logo" />
                </div>

                <div className="the-client">
                    <Image src={ image6 } alt="kcca logo" />
                </div>

                <div className="the-client">
                    <Image src={ image7 } alt="kcca logo" />
                </div>

                <div className="the-client">
                    <Image src={ image8 } alt="kcca logo" />
                </div>

                <div className="the-client">
                    <Image src={ image9 } alt="kcca logo" />
                </div>

                <div className="the-client">
                    <Image src={ image10 } alt="kcca logo" />
                </div>

                <div className="the-client">
                    <Image src={ image11 } alt="kcca logo" />
                </div>
                
                </Slider>
            </div>
        </Container>
        // <div>
        //     <Carousel itemPadding={[0, 20]} itemsToShow={3} outerSpacing={100}>
        //         <div><img src={ image1 } alt="kcca logo" height="50px" width="60px"/></div>
        //         <div><img src={ image1 } alt="kcca logo" height="50px" width="60px"/></div>
        //         <div><img src={ image1 } alt="kcca logo" height="50px" width="60px"/></div>
        //         <div><img src={ image1 } alt="kcca logo" height="50px" width="60px"/></div>
        //         <div><img src='../../assets/images/1.jpg' alt="kcca logo" height="50px" width="60px"/></div>
        //         <div><img src='../../assets/images/1.jpg' alt="kcca logo" height="50px" width="60px"/></div>
        //         <div><img src='../../assets/images/1.jpg' alt="kcca logo" height="50px" width="60px"/></div>
        //         <div><img src='../../assets/images/1.jpg' alt="kcca logo" height="50px" width="60px"/></div>

                
        //     </Carousel>
        // </div>
    )
}


export default ClientsComponent;