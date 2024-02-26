import type { InputHTMLAttributes } from "react";
import type { ControlProps } from "../types";

type InputType = InputHTMLAttributes<HTMLInputElement>;

export type InputProps = ControlProps & InputType;

export type InputRef<T> = T;
