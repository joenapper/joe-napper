import type { PropsWithChildren } from "react";

type ContainerVariant = "primary" | "secondary";

export type ContainerProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  variant?: ContainerVariant;
  id?: string;
}>;

export type ContainerWrapperProps = {
  $variant: ContainerVariant;
};
