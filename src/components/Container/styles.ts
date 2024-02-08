import styled, { css } from "styled-components";
import { mediaBelow } from "@constants/media";
import { spacing } from "@constants/theme";
import type { ContainerWrapperProps } from "./types";

export const ContainerWrapper = styled.section<ContainerWrapperProps>`
  padding: ${spacing.s16} 10%;
  max-width: ${({ $variant }) => ($variant === "primary" ? "1280px" : "920px")};
  margin: auto;

  ${mediaBelow.tablet(css`
    padding: ${spacing.s8} 1rem;
  `)}
`;
