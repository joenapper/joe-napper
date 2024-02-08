import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "../Card";
import { CarouselSlide } from "./styles";
import { responsive } from "./config";

// TODO: Make reusable
export const Slider = () => (
  <Carousel
    removeArrowOnDeviceType={["tablet", "mobile"]}
    draggable
    focusOnSelect
    infinite
    keyBoardControl
    responsive={responsive}
    showDots
    slidesToSlide={1}
    swipeable
    centerMode
  >
    <CarouselSlide>
      <Card />
    </CarouselSlide>
    <CarouselSlide>
      <Card />
    </CarouselSlide>
    <CarouselSlide>
      <Card />
    </CarouselSlide>
    <CarouselSlide>
      <Card />
    </CarouselSlide>
    <CarouselSlide>
      <Card />
    </CarouselSlide>
    <CarouselSlide>
      <Card />
    </CarouselSlide>
    <CarouselSlide>
      <Card />
    </CarouselSlide>
    <CarouselSlide>
      <Card />
    </CarouselSlide>
    <CarouselSlide>
      <Card />
    </CarouselSlide>
    <CarouselSlide>
      <Card />
    </CarouselSlide>
  </Carousel>
);
