import styled from "styled-components";
import { colors, spacing } from "@constants/theme";

export const Text = styled.p`
  /* TODO: Check contrast */
  color: ${colors.grey};
`;
export const TechStack = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.s4};
`;
