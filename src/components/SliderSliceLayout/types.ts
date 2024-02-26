import { PropsWithChildren } from "react";

export type SliderSliceLayoutProps = PropsWithChildren<{
  id?: string;
  title: string | JSX.Element;
}>;
