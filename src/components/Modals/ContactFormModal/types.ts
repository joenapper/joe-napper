import type { ModalProps } from "@components/Modal/types";

export type ContactFormModalProps = {
  illustration: JSX.Element;
  title: string;
  text: string | JSX.Element;
} & ModalProps;
