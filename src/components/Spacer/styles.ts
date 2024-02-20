import styled from "styled-components";
import { SpacerWrapperProps } from "./types";
import { deviceBelow } from "@constants/theme";

export const SpacerWrapper = styled.div<SpacerWrapperProps>`
  height: ${({ $desktopY }) => $desktopY};

  @media ${deviceBelow.tablet} {
    height: ${({ $mobileY }) => $mobileY};
  }
`;
