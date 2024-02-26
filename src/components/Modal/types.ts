import { PropsWithChildren } from "react";

export type ModalProps = PropsWithChildren<{
  id?: string;
  onClose: () => void;
  modalOpen: boolean;
}>;
