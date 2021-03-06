import React from "react";
import "../Styles/box.scss";
import Carousel from "react-bootstrap/Carousel";
import car from "../images/car.jpg";
import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import PriceCard from "../components/priceCard";
import Container from "react-bootstrap/Container";
class Box extends React.Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={car} alt="First slide" />
            <Carousel.Caption>
              <h3>Mercedes Royale</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={car1} alt="Third slide" />
            <Carousel.Caption>
              <h3>Mercedes Benz 1956</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={car2} alt="Third slide" />
            <Carousel.Caption>
              <h3>Mercedes Benz 1946</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
          <div className="priceCards">
            <PriceCard />
          </div>
        </Container>
      </>
    );
  }
}

export default Box;
