import React from "react";
import "./Hero.css";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <Carousel className="shadow shadow-lg">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://i.ibb.co/w0DpQMP/img-1.webp"
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
          src="https://i.ibb.co/ryXHfZz/img-2.webp"
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
          src="https://i.ibb.co/0ZxfJfK/img-3.webp"
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
