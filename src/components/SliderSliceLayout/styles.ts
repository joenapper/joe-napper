import { mediaBelow } from "@constants/media";
import { spacing } from "@constants/theme";
import styled, { css } from "styled-components";

export const SliderSliceLayoutWrapper = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    gap: ${spacing.s8};

    /* TODO: Align with Container component */
    ${mediaBelow.desktop(css`
      padding: ${spacing.s16} ${spacing.none};
      max-width: 100%;
      gap: ${spacing.s4};
    `)};

    ${mediaBelow.tablet(css`
      padding: ${spacing.s8} ${spacing.none};
    `)}
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;
