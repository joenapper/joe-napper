import { ContainerWrapper } from "./styles";
import type { ContainerProps } from "./types";

export const Container = ({
  children,
  as = "section",
  variant = "primary",
}: ContainerProps) => (
  <ContainerWrapper as={as} $variant={variant!}>
    {children}
  </ContainerWrapper>
);
