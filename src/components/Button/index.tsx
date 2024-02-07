import { forwardRef } from "react";

import { StyledButton } from "./styles";
import type { ButtonProps, ButtonRef } from "./types";

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ children, variant = "primary", ...props }: ButtonProps, ref) => (
    // TODO: Change to ButtonWrapper for consistency
    <StyledButton ref={ref} variant={variant} {...props}>
      {children}
    </StyledButton>
  )
);
