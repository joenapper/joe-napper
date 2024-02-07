import { Wrapper } from "./styles";
import type { ContainerProps } from "./types";

export const Container = ({ children, as = "section" }: ContainerProps) => (
  // TODO: Change to ContainerWrapper for consistency
  <Wrapper as={as}>{children}</Wrapper>
);
