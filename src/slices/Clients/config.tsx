const logoHeight = 60;

export const items = [
  <img src="/clients/nhs.webp" alt="NHS" height={logoHeight} />,
  <img src="/clients/bt.webp" alt="BT" height={logoHeight} />,
  <img src="/clients/hsbc.webp" alt="HSBC" height={logoHeight} />,
  <img src="/clients/cognizant.webp" alt="Cognizant" height={logoHeight} />,
  <img
    src="/clients/oodle-car-finance.webp"
    alt="Oodle car finance"
    height={logoHeight}
  />,
  <img
    src="/clients/sytner-group.webp"
    alt="Sytner group"
    height={logoHeight}
  />,
];

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
