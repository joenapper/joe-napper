import { TitleWrapper } from "./styles";
import type { TitleProps } from "./types";

export const Title = ({ children, as = "h2" }: TitleProps) => (
  <TitleWrapper as={as}>{children}</TitleWrapper>
);
