import { PropsWithChildren } from "react";

export type TitleProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
}>;
