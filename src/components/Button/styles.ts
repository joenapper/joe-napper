import styled from "styled-components";

import { buttonStyleMap } from "./styleMapping";
import type { StyledButtonProps } from "./types";
import { spacing } from "../../constants/theme";

export const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  padding: ${spacing.s2} ${spacing.s6};
  font-family: inherit;
  transition: 0.24s;

  ${({ variant }) => buttonStyleMap(variant!)}

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
