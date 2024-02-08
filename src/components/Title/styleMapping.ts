import { fontSize } from "@constants/theme";
import type { HeadingLevel } from "./types";

export const fontSizeStyleMap = (heading: HeadingLevel) => {
  const map = {
    h1: fontSize.xxl,
    h2: fontSize.xl,
  };
  return map[heading];
};
