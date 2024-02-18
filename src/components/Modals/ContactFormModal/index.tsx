import { Portal } from "@components/Portal";
import { Modal } from "@components/Modal";
import { Title } from "@components/Title";
import { Button } from "@components/Button";
import { PrimaryText } from "@components/PrimaryText";
import { ContactFormModalContent, IllustrationWrapper, Text } from "./styles";
import type { ContactFormModalProps } from "./types";

export const ContactFormModal = ({
  id,
  onClose,
  modalOpen,
  illustration,
  title,
  text,
}: ContactFormModalProps) => (
  <Portal>
    <Modal id={id} onClose={onClose} modalOpen={modalOpen}>
      <ContactFormModalContent>
        <IllustrationWrapper>{illustration}</IllustrationWrapper>
        <Title as="h3">
          <PrimaryText>{title}</PrimaryText>
        </Title>
        <Text>{text}</Text>
        <Button onClick={onClose}>Close</Button>
      </ContactFormModalContent>
    </Modal>
  </Portal>
);
