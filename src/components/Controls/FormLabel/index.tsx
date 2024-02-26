import { Label, LabelWrapper, LabelTextWrapper } from "./styles";
import type { FormLabelProps } from "./types";

export const FormLabel = ({ id, label, children }: FormLabelProps) => {
  return (
    <LabelWrapper>
      <Label htmlFor={id}>
        <LabelTextWrapper>{label}</LabelTextWrapper>
      </Label>
      {children}
    </LabelWrapper>
  );
};
