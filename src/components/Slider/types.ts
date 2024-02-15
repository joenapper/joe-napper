import { CarouselProps } from "react-multi-carousel";

export type SliderProps = {
  items: JSX.Element[];
} & Omit<CarouselProps, "children">;
