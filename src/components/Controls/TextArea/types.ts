import type { TextareaHTMLAttributes } from "react";
import type { ControlProps } from "../types";

type TextAreaType = TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TextAreaProps = TextAreaType & ControlProps;

export type TextAreaRef<T> = T;
