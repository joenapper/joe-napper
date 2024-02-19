import styled from "styled-components";
import { colors, spacing } from "@constants/theme";

const cardHeight = 400;

export const ArticleCardWrapper = styled.div`
  background: white;
  border-radius: ${spacing.s2};
  display: grid;
  grid-template-rows: 1fr 2fr;
  height: ${cardHeight}px;
`;

export const Image = styled.img`
  width: 100%;
  height: ${cardHeight / 3}px;
`;

export const ContentWrapper = styled.div`
  padding: ${spacing.s4};
  background: ${colors.darkGrey};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing.s4};
`;

export const Text = styled.p``;

export const ButtonWrapper = styled.div``;
