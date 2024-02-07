import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "../Card";
import { CarouselSlide } from "./styles";

// TODO: Make reusable
export const Slider = () => {
  // TODO: Align with breakpoints
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <Carousel
      // TODO: Review props
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
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
};
