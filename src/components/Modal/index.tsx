import { useRef, MutableRefObject } from "react";
import { Overlay, Wrapper } from "./styles";
import { ModalProps } from "./types";
import { useClickOutside } from "../../hooks/useClickOutside";

export const Modal = ({
  id,
  onClose,
  modalOpen = false,
  children,
}: ModalProps) => {
  const modalRef = useRef() as MutableRefObject<HTMLDivElement>;
  useClickOutside(modalRef, () => onClose());

  if (!modalOpen) return null;

  return (
    <>
      <Overlay />
      <Wrapper
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
        ref={modalRef}
      >
        {children}
      </Wrapper>
    </>
  );
};
