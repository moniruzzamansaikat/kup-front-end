import React from 'react'
import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import 'assets/scss/slider.scss'
import slider1 from 'assets/images/slides/slider.jpeg'
import slider2 from 'assets/images/slides/slider1.jpg'
import slider3 from 'assets/images/slides/slider2.jpeg'
import slider4 from 'assets/images/slides/slider3.jpg'
import slider5 from 'assets/images/slides/slider4.jpg'

function Slider() {
  const [slides, setSlides] = useState([slider1, slider2, slider3, slider4, slider5])

  return (
    <Carousel className="slider" indicators={false}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={slide} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider
