import { FailIllustration } from "@icons/FailIllustration";
import { ContactFormModal } from "..";
import type { ModalProps } from "@components/Modal/types";

export const FailModal = ({ onClose, modalOpen }: ModalProps) => (
  <ContactFormModal
    id="fail-modal"
    illustration={<FailIllustration />}
    title="Uh oh."
    text={
      <>
        Something weird happened.
        <br />
        Please try again later.
      </>
    }
    onClose={onClose}
    modalOpen={modalOpen}
  />
);
