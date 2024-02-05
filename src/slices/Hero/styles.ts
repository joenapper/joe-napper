import styled from "styled-components";
import { colors, fontSize, spacing } from "../../constants/theme";

export const HeroContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${spacing.s4};
`;

export const Title = styled.h1`
  font-size: ${fontSize.xxl};
`;

export const Text = styled.p`
  font-size: ${fontSize.base};
  /* TODO: Check contrast rating */
  color: ${colors.grey};
`;

export const HeroButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.s4};
`;
