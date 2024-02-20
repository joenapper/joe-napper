import styled from "styled-components";
import { colors, deviceBelow, fontSize, spacing } from "@constants/theme";

export const Text = styled.p`
  color: ${colors.grey};
  font-size: ${fontSize.base};
`;
export const TechStack = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.s4};

  @media ${deviceBelow.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${deviceBelow.largeMobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
`;
