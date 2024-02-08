import styled from "styled-components";
import { colors, fontSize, spacing } from "@constants/theme";

export const HeroContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${spacing.s6};
`;

export const Strapline = styled.p`
  font-size: ${fontSize.xs};
`;

export const Text = styled.p`
  font-size: ${fontSize.base};
  color: ${colors.grey};
`;

export const HeroButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.s4};
`;

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.s4};
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.s2};
  font-size: ${fontSize.lg};
  font-weight: 500;
`;

export const Label = styled.span`
  color: ${colors.grey};
  font-size: ${fontSize.xs};
`;

export const Divider = styled.div`
  width: 1px;
  background: ${colors.darkGrey};
`;
