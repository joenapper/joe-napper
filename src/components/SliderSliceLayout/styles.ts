import styled from "styled-components";
import { deviceBelow, spacing } from "@constants/theme";
import {
  desktopContainerPaddingY,
  mobileContainerPaddingY,
} from "@components/Container/styles";

export const SliderSliceLayoutWrapper = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    gap: ${spacing.s8};

    @media ${deviceBelow.desktop} {
      padding: ${desktopContainerPaddingY} ${spacing.none};
      max-width: 100%;
      gap: ${spacing.s4};
    }

    @media ${deviceBelow.tablet} {
      padding: ${mobileContainerPaddingY} ${spacing.none};
    }
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;
