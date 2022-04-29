import React from "react";
import "./Hero.css";
import { Carousel } from "react-bootstrap";

import img1 from "../../../assets/carousel/img-1.webp";
import img2 from "../../../assets/carousel/img-2.webp";
import img3 from "../../../assets/carousel/img-3.webp";

const Hero = () => {
  return (
    <Carousel className="shadow shadow-lg">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Healthy Fruits</h3>
          <p>The fruits, needed for your health</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>The Tasty Fruits</h3>
          <p>Fruits are very sweet.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Eat, Taste and Conquer</h3>
          <p>New fruits you ever eaten.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
