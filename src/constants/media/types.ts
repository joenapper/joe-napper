import type { CSSProp, ExecutionContext } from "styled-components";

// FlattenSimpleInterpolation is no longer available in styled components which breaks the types
// TODO: ^ Find new approach for media utils
export type Media = {
  [key: string]: (styles: CSSProp | ExecutionContext | string) => CSSProp;
};
