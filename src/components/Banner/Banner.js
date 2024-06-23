import './Banner.css'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'
import image5 from '../../images/image5.jpg'
import image6 from '../../images/image6.jpg'

function Banner() {
  return (
    <div className='overlay'>
      <h1 className="text">Nurturing leaders</h1>
      <h1 className="text1">Fostering unity</h1>
      <h1 className='text2'>Serving with pride</h1>

      <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false}>
        <div>
          <img src={image1} alt="Slide 1" className="carousel-image" />

        </div>
        <div>
          <img src={image2} alt="Slide 2" className="carousel-image" />

        </div>
        <div>
          <img src={image3} alt="Slide 3" className="carousel-image" />

        </div>
        <div>
          <img src={image4} alt="Slide 4" className="carousel-image" />

        </div>
        <div>
          <img src={image5} alt="Slide 5" className="carousel-image" />

        </div>
        <div>
          <img src={image6} alt="Slide 6" className="carousel-image" />

        </div>
      </Carousel>
    </div>
  )
}

export default Banner