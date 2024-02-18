import { SpacerWrapper } from "./styles";
import type { SpacerProps } from "./types";

export const Spacer = ({ mobileY, desktopY }: SpacerProps) => (
  <SpacerWrapper $mobileY={mobileY} $desktopY={desktopY} />
);
