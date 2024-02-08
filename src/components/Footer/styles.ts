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

  ${mediaBelow.tablet(css`
    flex-direction: column;
  `)};
`;

export const NavItems = styled.ul`
  display: flex;
`;

export const Icons = styled.ul`
  display: flex;
  gap: ${spacing.s2};
`;
