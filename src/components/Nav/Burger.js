import { useState } from "react";
// Styled
import styled from "styled-components";
// Components
import RightNav from "./RightNav";

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerIcon open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerIcon>
      <RightNav open={open} />
    </>
  );
};

const BurgerIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 2;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: var(--header-color);
    margin: 5px;
    border-radius: 4px;
    transition: all 0.5s ease;

    &:nth-child(1) {
      transform: ${({ open }) =>
        open
          ? "rotate(-45deg) translate(-5px,6px)"
          : "rotate(0) translate(0px,0px)"};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "scale(0)" : "scale(1)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) =>
        open
          ? "rotate(45deg) translate(-5px,-6px)"
          : "rotate(0) translate(0px,0px)"};
    }
  }
`;

export default Burger;
