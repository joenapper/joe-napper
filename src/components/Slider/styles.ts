import { mediaBelow } from "@constants/media";
import { spacing } from "@constants/theme";
import styled, { css } from "styled-components";

export const CarouselWrapper = styled.div`
  .react-multi-carousel-list {
    z-index: -1;
  }
`;

export const CarouselSlide = styled.div`
  margin: 0 ${spacing.s4};
  text-align: center;

  img {
    max-width: -webkit-fill-available;
  }

  ${mediaBelow.tablet(css`
    margin: 0 ${spacing.s2};
  `)};
`;
