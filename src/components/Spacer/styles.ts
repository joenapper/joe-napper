import styled from "styled-components";
import { SpacerWrapperProps } from "./types";
import { deviceBelow, spacing } from "@constants/theme";

export const SpacerWrapper = styled.div<SpacerWrapperProps>`
  height: ${({ $desktopY }) => spacing[$desktopY]};

  @media ${deviceBelow.tablet} {
    height: ${({ $mobileY }) => spacing[$mobileY]};
  }
`;
