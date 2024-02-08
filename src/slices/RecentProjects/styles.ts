import { mediaBelow } from "@constants/media";
import { spacing } from "@constants/theme";
import styled, { css } from "styled-components";

export const RecentProjectsWrapper = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    gap: ${spacing.s8};

    ${mediaBelow.desktop(css`
      padding: ${spacing.s16} ${spacing.none};
      max-width: 100%;
      /* margin: auto; */
    `)};

    /* ${mediaBelow.tablet(css`
      padding: ${spacing.s16} 1rem;
    `)} */
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;
