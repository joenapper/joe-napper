import { ArticleCard } from "@components/ArticleCard";

const articles = [
  {
    title: "Optimise Your CSS With Shorthand Properties!",
    text: "We use shorthand properties to set the values of multiple CSS properties simultaneously, resulting in more optimised and efficient code.",
    image: "/articles/shorthand-properties.png",
    link: "https://joenapper.medium.com/optimise-your-css-with-shorthand-properties-927e08b6afae",
  },
  {
    title: "How To Add a Dynamic Copyright Year To Your Website",
    text: "If you create and maintain your own websites this is a neat trick that will automatically update the copyright year for you - no more...",
    image: "/articles/dynamic-copyright-year.png",
    link: "https://joenapper.medium.com/how-to-add-a-dynamic-copyright-year-to-your-website-6798b1755404",
  },
  {
    title: "Why You Should Be Using CSS Variables!",
    text: "The use of CSS variables allows us as developers to instantly update a property value throughout our entire application with one...",
    image: "/articles/css-variables.png",
    link: "https://joenapper.medium.com/why-you-should-be-using-css-variables-3989c92e200f",
  },
  {
    title: "The Power Of UX",
    text: "Having an online presence is important for every business, especially now as online shopping is quickly becoming is quickly becoming...",
    image: "/articles/power-of-ux.png",
    link: "https://www.linkedin.com/pulse/benefits-investing-ux-design-joe-napper/",
  },
  {
    title: "Why You Should Invest In An Online Presence",
    text: "For small businesses, creating an online presence may not be the main priority but the recent pandemic has presented many challenges...",
    image: "/articles/online-presence.png",
    link: "https://www.linkedin.com/pulse/why-you-should-invest-online-presence-joe-napper/",
  },
];

export const items = articles.map((article, index) => (
  <ArticleCard key={index} {...article} />
));

export const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 80,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 40,
  },
};
