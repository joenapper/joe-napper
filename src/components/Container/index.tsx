import { ContainerWrapper } from "./styles";
import type { ContainerProps } from "./types";

export const Container = ({
  children,
  as = "section",
  variant = "primary",
  id,
}: ContainerProps) => (
  <ContainerWrapper as={as} $variant={variant!} id={id}>
    {children}
  </ContainerWrapper>
);
