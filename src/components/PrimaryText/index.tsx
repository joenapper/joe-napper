import { PrimaryTextWrapper } from "./styles";
import type { PrimaryTextProps } from "./types";

export const PrimaryText = ({ children }: PrimaryTextProps) => (
  <PrimaryTextWrapper>{children}</PrimaryTextWrapper>
);
