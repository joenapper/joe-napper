import { SuccessIllustration } from "@icons/SuccessIllustration";
import type { ModalProps } from "@components/Modal/types";
import { ContactFormModal } from "..";

export const SuccessModal = ({ onClose, modalOpen }: ModalProps) => (
  <ContactFormModal
    id="success-modal"
    onClose={onClose}
    modalOpen={modalOpen}
    illustration={<SuccessIllustration />}
    title="Success!"
    text={
      <>
        Your message was sent successfully. <br />
        You will be contacted shortly.
      </>
    }
  />
);
