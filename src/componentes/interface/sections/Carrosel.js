import React from 'react';
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  CarouselCaption,
  View,
} from 'mdbreact';

const Carrosel = () => {
  return (
    <React.Fragment>
      <Carousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
      >
        <CarouselInner>
          <CarouselItem itemId="1">
            <View>
              <img
                className="d-block w-100 img-fluid"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
            </View>
            <CarouselCaption>
              <h3>First Image</h3>
              <p className="lead">hdsiudhsa dhsiud hsaudhauih sauihdsaiu </p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img
                className="d-block w-100 img-fluid"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
                alt="Second slide"
              />
            </View>
            <CarouselCaption>
              <h3>Second Image</h3>
              <p className="lead">hdsiudhsa dhsiud hsaudhauih sauihdsaiu </p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img
                className="d-block w-100 img-fluid"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
                alt="Third slide"
              />
            </View>
            <CarouselCaption>
              <h3>Third Image</h3>
              <p className="lead">hdsiudhsa dhsiud hsaudhauih sauihdsaiu </p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="4">
            <View>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg"
                alt="Mattonit's item"
              />
            </View>
            <CarouselCaption>
              <h3>Fourth Image</h3>
              <p className="lead">hdsiudhsa dhsiud hsaudhauih sauihdsaiu </p>
            </CarouselCaption>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    </React.Fragment>
  );
};

export default Carrosel;
