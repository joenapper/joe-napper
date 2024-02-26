import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselWrapper, CarouselSlide } from "./styles";
import type { SliderProps } from "./types";

export const Slider = ({ items, ...props }: SliderProps) => {
  if (!items) return null;

  return (
    <CarouselWrapper>
      <Carousel {...props} infinite responsive={props.responsive}>
        {items.map((item, index) => (
          <CarouselSlide key={index} $showDots={props.showDots}>
            {item}
          </CarouselSlide>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};
