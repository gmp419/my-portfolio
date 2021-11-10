import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import avatar1 from "../images/avatar/avatar-1.png";
import avatar2 from "../images/avatar/avatar-2.png";
import avatar3 from "../images/avatar/avatar-3.png";
import avatar4 from "../images/avatar/avatar-4.png";

const TestimonialsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={4000}
        >
            <>
                <img src={avatar1} className="carosel-image" alt="avatar 1" />
                <div className="myCarosel">
                    <h3 className="legend">John Doe 1</h3>
                    <p>lorem ipsum dolor sit amet, con lorem lorem lorem ipsum dolor sit amet, con lorem lorem</p>
                </div>
                
            </>
            <>
                <img src={avatar2} className="carosel-image"  alt="avatar 1" />
                <div className="myCarosel">
                    <h3 className="legend">John Doe 2</h3>
                    <p>lorem ipsum dolor sit amet, con lorem lorem lorem ipsum dolor sit amet, con lorem lorem</p>
                </div>
                
            </>
            <>
                <img src={avatar3} className="carosel-image"  alt="avatar 1" />
                <div className="myCarosel">
                    <h3 className="legend">John Doe 3</h3>
                    <p>lorem ipsum dolor sit amet, con lorem lorem lorem ipsum dolor sit amet, con lorem lorem</p>
                </div>
                
            </>
            <>
                <img src={avatar4} className="carosel-image"  alt="avatar 1" />
                <div className="myCarosel">
                    <h3 className="legend">John Doe 4</h3>
                    <p>lorem ipsum dolor sit amet, con lorem lorem lorem ipsum dolor sit amet, con lorem lorem</p>
                </div>
                
            </>
          
        </Carousel>
    )
}

export default TestimonialsCarousel
