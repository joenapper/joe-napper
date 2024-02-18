import styled from "styled-components";
import { SpacerWrapperProps } from "./types";

export const SpacerWrapper = styled.div<SpacerWrapperProps>`
  height: ${({ $desktopY }) => $desktopY};

  /* TODO: Align with new media utils */
  @media screen and (max-width: 768px) {
    height: ${({ $mobileY }) => $mobileY};
  }
`;
