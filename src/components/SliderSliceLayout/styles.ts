import styled from "styled-components";
import { deviceBelow, spacing } from "@constants/theme";

export const SliderSliceLayoutWrapper = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    gap: ${spacing.s8};

    /* TODO: Align with Container component */
    @media ${deviceBelow.desktop} {
      padding: ${spacing.s16} ${spacing.none};
      max-width: 100%;
      gap: ${spacing.s4};
    }

    @media ${deviceBelow.tablet} {
      padding: ${spacing.s8} ${spacing.none};
    }
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;
