import { spacing } from "@constants/theme";

export type SpacerProps = {
  mobileY: keyof typeof spacing;
  desktopY: keyof typeof spacing;
};

export type SpacerWrapperProps = {
  $mobileY: keyof typeof spacing;
  $desktopY: keyof typeof spacing;
};
