import styled from "styled-components";

const RightNav = ({ open }) => {
  return (
    <NavList open={open}>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Articles</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Dark Mode</a>
      </li>
    </NavList>
  );
};

const NavList = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin-left: 3rem;

    a {
      text-decoration: none;

      &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background-color: #fdda3e;
        transition: width 0.4s;
      }

      &:hover::after {
        width: 100%;
      }
    }

    /* a::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #fdda3e;
      transition: width 0.4s;
    } */

    /* a:hover::after {
      width: 100%;
    } */
  }
  /* ------------------------------
  .nav-links a::after {
    content:'';
    display: block;
    width: 0;
    height: 2px;
    background-color: #ffbd59;
    transition: width .4s
}

.nav-links a:hover::after {
    width: 100%;
    transition: .4s;
}
------------------------------- */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    background-color: #ccc;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 70vw;
    transition: transform 0.5s ease-in-out;

    li {
      margin: 0;
    }
  }
`;

export default RightNav;
