import styled from "styled-components";
import { colors, deviceBelow, spacing } from "@constants/theme";

export const ContactWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${deviceBelow.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 575px;
  object-fit: cover;

  @media ${deviceBelow.tablet} {
    display: none;
  }
`;

export const ContactFormWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 50%;
  left: calc(50% - ${spacing.s4});
  transform: translateY(50%);
  background: ${colors.darkGrey};
  padding: ${spacing.s8};

  @media ${deviceBelow.tablet} {
    position: relative;
    right: initial;
    bottom: initial;
    left: initial;
    transform: translateY(0);
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.s6};

  @media ${deviceBelow.tablet} {
    gap: ${spacing.s3};
  }
`;

export const ContactFormTitleWrapper = styled.div`
  @media ${deviceBelow.tablet} {
    text-align: center;
  }
`;
