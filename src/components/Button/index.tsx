import { forwardRef } from "react";

import { ButtonWrapper } from "./styles";
import type { ButtonProps, ButtonRef } from "./types";

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ children, variant = "primary", ...props }: ButtonProps, ref) => (
    <ButtonWrapper ref={ref} $variant={variant} {...props}>
      {children}
    </ButtonWrapper>
  )
);
