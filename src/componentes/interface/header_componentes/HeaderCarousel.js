import React, { Component } from "react";
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  View,
  Animation
} from "mdbreact";

import carouselImage1 from "../../../imgs/entregacor2.png";
import carouselImage2 from "../../../imgs/elfen.png";
import carouselImage3 from "../../../imgs/orgaos.png";

class HeaderCarousel extends Component {
  render() {
    return (
      <Carousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={true}
        className="z-depth-1 h-100 d-none d-md-block"
        style={{ boxShadow: "none" }}
      >
        <CarouselInner>
          <CarouselItem itemId="1">
            <View>
              <img
                className="d-block w-100"
                src={carouselImage1}
                alt="First slide"
              />
            </View>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img
                className="d-block w-100"
                src={carouselImage2}
                alt="Second slide"
              />
            </View>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img
                className="d-block w-100"
                src={carouselImage3}
                alt="Third slide"
              />
            </View>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    );
  }
}

export default HeaderCarousel;
