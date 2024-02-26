import { font } from "@constants/theme";
import styled from "styled-components";
import { fontSizeStyleMap } from "./styleMapping";
import type { TitleWrapperProps } from "./types";

export const TitleWrapper = styled.h2<TitleWrapperProps>`
  font-family: ${font.primary};
  font-size: ${({ as }) => fontSizeStyleMap(as!)};
`;
