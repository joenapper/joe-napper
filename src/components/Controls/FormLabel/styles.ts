import styled, { css } from "styled-components";
import { spacing, fontSize } from "@constants/theme";

const defaultLabelStyle = css`
  margin: ${spacing.none} ${spacing.none} ${spacing.s2} ${spacing.none};
  font-size: ${fontSize.base};
`;

export const Label = styled.label`
  display: block;
  ${defaultLabelStyle}
`;

export const LabelTextWrapper = styled.div`
  width: 100%;
`;

export const LabelWrapper = styled.div`
  width: 100%;
`;
