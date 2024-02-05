import { Wrapper } from "./styles";
import type { ContainerProps } from "./types";

export const Container = ({ children, as = "section" }: ContainerProps) => (
  <Wrapper as={as}>{children}</Wrapper>
);
