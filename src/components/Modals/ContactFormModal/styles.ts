import styled from "styled-components";
import { spacing, fontSize } from "@constants/theme";

export const ContactFormModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${spacing.s4};
`;

export const IllustrationWrapper = styled.div`
  margin: ${spacing.none} auto ${spacing.s4} auto;

  svg {
    max-height: 100px;
    width: auto;
  }
`;

export const Text = styled.p`
  margin-bottom: ${spacing.s4};
  text-align: center;
  font-size: ${fontSize.base};
`;
