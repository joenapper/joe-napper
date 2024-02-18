import styled, { css } from "styled-components";
import { SpacerWrapperProps } from "./types";
import { mediaBelow } from "@constants/media";

export const SpacerWrapper = styled.div<SpacerWrapperProps>`
  height: ${({ $desktopY }) => $desktopY};

  ${mediaBelow.tablet(css`
    height: ${({ $mobileY }) => $mobileY};
  `)};
`;
