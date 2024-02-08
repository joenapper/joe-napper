import { PropsWithChildren } from "react";

export type HeadingLevel = "h1" | "h2" | "h3";

export type TitleProps = PropsWithChildren<{
  as?: HeadingLevel;
}>;

export type TitleWrapperProps = Pick<TitleProps, "as">;
