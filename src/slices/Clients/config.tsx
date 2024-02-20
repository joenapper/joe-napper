const logoHeight = 60;

export const items = [
  <img src="/clients/nhs.png" alt="NHS" height={logoHeight} />,
  <img src="/clients/bt.png" alt="BT" height={logoHeight} />,
  <img src="/clients/hsbc.png" alt="HSBC" height={logoHeight} />,
  <img src="/clients/cognizant.png" alt="Cognizant" height={logoHeight} />,
  <img
    src="/clients/oodle-car-finance.png"
    alt="Oodle car finance"
    height={logoHeight}
  />,
  <img
    src="/clients/sytner-group.png"
    alt="Sytner group"
    height={logoHeight}
  />,
];

// TODO: Align with breakpoints
export const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 6,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 6,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 3,
  },
};
