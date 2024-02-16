import { css } from "styled-components";
import { colors, spacing, fontSize } from "@constants/theme";

export const inputMixin = css`
  background: ${colors.white};
  border-radius: 8px;
  padding: ${spacing.s3};
  border: 1px solid #e0e0e0;
  width: 100%;
  outline: none;
  font-family: inherit;
  font-size: ${fontSize.sm};

  &:focus,
  &:hover {
    border: 1px solid ${colors.black};
  }
`;
