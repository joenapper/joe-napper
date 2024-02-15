import { mediaBelow } from "@constants/media";
import { spacing } from "@constants/theme";
import styled, { css } from "styled-components";

// TODO: Align with RecentProjects slice wrapper
export const ClientsWrapper = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    gap: ${spacing.s8};

    ${mediaBelow.desktop(css`
      padding: ${spacing.s16} ${spacing.none};
      max-width: 100%;
    `)};
  }
`;

// TODO: Align with RecentProjects slice title wrapper
export const TitleWrapper = styled.div`
  text-align: center;
`;
