import styled from "styled-components";
import { colors, deviceBelow, spacing } from "@constants/theme";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: ${spacing.s4} 10%;
  color: ${colors.white};

  @media ${deviceBelow.tablet} {
    padding: ${spacing.s4};
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.primary};
  padding-top: ${spacing.s6};

  @media ${deviceBelow.tablet} {
    flex-direction: column;
    padding-top: ${spacing.s3};
    gap: ${spacing.s3};
  }
`;

export const NavItems = styled.ul`
  display: flex;

  @media ${deviceBelow.tablet} {
    flex-direction: column;
  }
`;

export const Icons = styled.ul`
  display: flex;
  gap: ${spacing.s2};
`;

export const Icon = styled.a`
  transition: all 0.4s ease;

  &:hover {
    svg,
    path {
      fill: ${colors.primary};
    }
  }
`;
