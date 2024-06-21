import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner from '../images/banner.jpg'
import slide_1 from '../images/slide_1.jpg'
import slide_2 from '../images/slide_2.jpg'
import slide_3 from '../images/slide_3.jpg'
import slide_4 from '../images/slide_4.jpg'
import slide_5 from '../images/slide_5.jpg'
import slide_6 from '../images/slide_6.jpg'
import slide_7 from '../images/slide_7.jpg'

function CarouselPage() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'40vh'}}
        className="d-block w-100"
        src={banner}
        alt=""
      />
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'40vh'}}
        className="d-block w-100"
        src={slide_1}
        alt=""
      />
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'40vh'}}
        className="d-block w-100"
        src={slide_2}
        alt=""
      />
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'40vh'}}
        className="d-block w-100"
        src={slide_3}
        alt=""
      />
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'40vh'}}
        className="d-block w-100"
        src={slide_4}
        alt=""
      />
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'40vh'}}
        className="d-block w-100"
        src={slide_5}
        alt=""
      />
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'40vh'}}
        className="d-block w-100"
        src={slide_6}
        alt=""
      />
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'40vh'}}
        className="d-block w-100"
        src={slide_7}
        alt=""
      />
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage