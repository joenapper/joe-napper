import styled from "styled-components";
import { deviceBelow, spacing } from "@constants/theme";
import type { ContainerWrapperProps } from "./types";

export const desktopContainerPaddingY = spacing.s16;

export const mobileContainerPaddingY = spacing.s8;

export const ContainerWrapper = styled.section<ContainerWrapperProps>`
  padding: ${desktopContainerPaddingY} 10%;
  max-width: ${({ $variant }) => ($variant === "primary" ? "1280px" : "920px")};
  margin: auto;

  @media ${deviceBelow.tablet} {
    padding: ${mobileContainerPaddingY} ${spacing.s4};
  }
`;
