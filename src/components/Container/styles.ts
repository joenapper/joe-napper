import styled, { css } from "styled-components";
import { mediaBelow } from "../../constants/media";

export const Wrapper = styled.section`
  /* TODO: Align with spacing in theme */
  padding: 4rem 10%;
  max-width: 1280px;
  margin: auto;

  ${mediaBelow.tablet(css`
    padding: 4rem 1rem;
  `)}
`;
