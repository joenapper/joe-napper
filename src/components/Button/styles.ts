import styled from "styled-components";

import { buttonStyleMap } from "./styleMapping";
import type { ButtonWrapperProps } from "./types";
import { font, spacing } from "@constants/theme";

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  outline: none;
  padding: ${spacing.s2} ${spacing.s6};
  font-family: ${font.primary};

  ${({ $variant }) => buttonStyleMap($variant!)}

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
