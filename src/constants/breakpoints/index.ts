import type { Breakpoints } from "./types";

const breakpoints: Breakpoints = {
  mobile: {
    breakpoint: 0,
  },
  largeMobile: {
    breakpoint: 480,
  },
  tablet: {
    breakpoint: 768,
  },
  desktop: {
    breakpoint: 1024,
  },
  largeDesktop: {
    breakpoint: 1440,
  },
} as const;

export default breakpoints;
