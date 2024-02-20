import styled from "styled-components";
import { deviceBelow, spacing } from "@constants/theme";
import type { ContainerWrapperProps } from "./types";

export const ContainerWrapper = styled.section<ContainerWrapperProps>`
  padding: ${spacing.s16} 10%;
  max-width: ${({ $variant }) => ($variant === "primary" ? "1280px" : "920px")};
  margin: auto;

  @media ${deviceBelow.tablet} {
    padding: ${spacing.s8} ${spacing.s4};
  }
`;
