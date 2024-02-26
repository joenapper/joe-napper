import styled from "styled-components";
import { colors, deviceBelow, spacing } from "@constants/theme";

export const ProjectCardWrapper = styled.div`
  background: white;
  border-radius: ${spacing.s2};
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 320px;

  @media ${deviceBelow.tablet} {
    grid-template-columns: 1fr;
    min-height: initial;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${spacing.s2} ${spacing.none} ${spacing.none} ${spacing.s2};
  object-fit: cover;

  @media ${deviceBelow.tablet} {
    border-radius: ${spacing.s2} ${spacing.s2} ${spacing.none} ${spacing.none};
    height: 200px;
  }
`;

export const ContentWrapper = styled.div`
  padding: ${spacing.s4};
  background: ${colors.darkGrey};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: ${spacing.s4};
  border-radius: ${spacing.none} ${spacing.s2} ${spacing.s2} ${spacing.none};

  @media ${deviceBelow.tablet} {
    border-radius: ${spacing.none} ${spacing.none} ${spacing.s2} ${spacing.s2};
    min-height: 260px;
    justify-content: initial;

    h3 {
      height: 86px;
    }
  }
`;

export const Text = styled.p`
  @media ${deviceBelow.tablet} {
    height: 100px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ButtonWrapper = styled.div``;
