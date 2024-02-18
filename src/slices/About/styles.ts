import styled, { css } from "styled-components";
import { colors, fontSize, spacing } from "@constants/theme";
import { mediaBelow } from "@constants/media";

export const Text = styled.p`
  color: ${colors.grey};
  font-size: ${fontSize.base};
`;
export const TechStack = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.s4};

  ${mediaBelow.tablet(css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `)};

  ${mediaBelow.largeMobile(css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  `)};
`;
