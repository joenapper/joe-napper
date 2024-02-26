import { colors, spacing } from "@constants/theme";
import type { ButtonVariant } from "./types";

export const buttonStyleMap = (variant: ButtonVariant) => {
  const map = {
    primary: {
      color: colors.black,
      background: colors.primary,
      border: `1px solid ${colors.primary}`,
      borderRadius: spacing.s2,
    },
    secondary: {
      color: colors.white,
      background: "transparent",
      border: `1px solid ${colors.white}`,
      borderRadius: spacing.s2,
    },
    tertiary: {
      color: colors.black,
      background: colors.primary,
      border: `1px solid ${colors.primary}`,
      borderRadius: spacing.s6,
    },
    quaternary: {
      color: colors.primary,
      background: "transparent",
      border: `1px solid ${colors.primary}`,
      borderRadius: spacing.s6,
    },
  };
  return map[variant];
};
