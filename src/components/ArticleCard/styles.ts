import styled from "styled-components";
import { colors, deviceBelow, spacing } from "@constants/theme";

export const ArticleCardWrapper = styled.div`
  background: white;
  border-radius: ${spacing.s2};
`;

export const Image = styled.img`
  width: 100%;
  height: 125px;
  object-fit: cover;
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

export const TitleWrapper = styled.div`
  height: 114px;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Text = styled.p`
  min-height: 102px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${deviceBelow.desktop} {
    min-height: 85px;
  }

  @media ${deviceBelow.tablet} {
    -webkit-line-clamp: 5;
  }
`;

export const ButtonWrapper = styled.div``;
