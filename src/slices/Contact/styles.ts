import { mediaBelow } from "@constants/media";
import { colors, spacing } from "@constants/theme";
import styled, { css } from "styled-components";

export const ContactWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${mediaBelow.tablet(css`
    grid-template-columns: 1fr;
  `)};
`;

export const Image = styled.img`
  width: 100%;
  height: 575px;
  object-fit: cover;

  ${mediaBelow.tablet(css`
    display: none;
  `)};
`;

export const ContactFormWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 50%;
  left: calc(50% - ${spacing.s4});
  transform: translateY(50%);
  background: ${colors.darkGrey};
  padding: ${spacing.s8};

  ${mediaBelow.tablet(css`
    position: relative;
    right: initial;
    bottom: initial;
    left: initial;
    transform: translateY(0);
  `)};
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.s6};

  ${mediaBelow.tablet(css`
    gap: ${spacing.s3};
  `)};
`;

export const ContactFormTitleWrapper = styled.div`
  ${mediaBelow.tablet(css`
    text-align: center;
  `)};
`;
