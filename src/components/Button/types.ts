import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "quaternary";

export type ButtonProps = PropsWithChildren<
  {
    variant?: ButtonVariant;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

export type ButtonRef = HTMLButtonElement;

export type ButtonWrapperProps = {
  $variant?: ButtonVariant;
};
