import styled from "styled-components";
import { colors, spacing } from "../../constants/theme";

export const CardWrapper = styled.div`
  background: white;
  border-radius: ${spacing.s2};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: ${spacing.s2} ${spacing.none} ${spacing.none} ${spacing.s2};
`;

export const ContentWrapper = styled.div`
  padding: ${spacing.s4};
  background: ${colors.darkGrey};
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing.s4};
  border-radius: ${spacing.none} ${spacing.s2} ${spacing.s2} ${spacing.none};
`;

export const Text = styled.p``;

export const ButtonWrapper = styled.div``;
