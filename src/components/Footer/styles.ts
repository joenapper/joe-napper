import styled, { css } from "styled-components";
import { colors, spacing } from "@constants/theme";
import { mediaBelow } from "@constants/media";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: ${spacing.s4} 10%;
  color: ${colors.white};

  ${mediaBelow.tablet(css`
    padding: ${spacing.s4};
  `)};
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.primary};
  padding-top: ${spacing.s6};

  ${mediaBelow.tablet(css`
    flex-direction: column;
    padding-top: ${spacing.s3};
    gap: ${spacing.s3};
  `)};
`;

export const NavItems = styled.ul`
  display: flex;

  ${mediaBelow.tablet(css`
    flex-direction: column;
  `)};
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
