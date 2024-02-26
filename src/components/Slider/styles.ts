import styled from "styled-components";
import { deviceBelow, spacing } from "@constants/theme";
import type { CarouselSlideProps } from "./types";

export const CarouselWrapper = styled.div`
  .react-multi-carousel-list {
    z-index: 0;
  }
`;

export const CarouselSlide = styled.div<CarouselSlideProps>`
  margin: 0 ${spacing.s4};
  margin-bottom: ${({ $showDots }) => $showDots && spacing.s4};
  text-align: center;

  img {
    max-width: -webkit-fill-available;
  }

  @media ${deviceBelow} {
    margin: 0 ${spacing.s2};
  }
`;
