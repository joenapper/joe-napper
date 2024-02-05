import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export type ButtonProps = PropsWithChildren<
  {
    variant?: ButtonVariant;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

export type ButtonRef = HTMLButtonElement;

export type StyledButtonProps = Pick<ButtonProps, "variant">;
