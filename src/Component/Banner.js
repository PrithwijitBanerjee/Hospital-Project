import React from 'react'
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import BannerImg1 from '../images/Banner1.jpg'
import BannerImg2 from '../images/Banner2.jpg'
import BannerImg3 from '../images/Banner3.jpg'
export default function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='container-fluid' >
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{height:500}}
          src={BannerImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='text-dark'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:500}}
          src={BannerImg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className='text-dark'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{height:500}}
          src={BannerImg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className='text-dark'>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

