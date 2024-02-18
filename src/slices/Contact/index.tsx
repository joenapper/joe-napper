import { Container } from "@components/Container";
import { PrimaryText } from "@components/PrimaryText";
import { Title } from "@components/Title";
import { ContactWrapper, Image, ContactFormWrapper } from "./styles";
import { Input } from "@components/Controls/Input";
import { TextArea } from "@components/Controls/TextArea";
import { Button } from "@components/Button";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FailModal } from "@components/Modals/ContactFormModal/FailModal";
import { SuccessModal } from "@components/Modals/ContactFormModal/SuccessModal";
import { Loader } from "@components/Loader";

// TODO: Review to simplify this file
export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [disabled, setDisabled] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClose = () => setModalOpen(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          setModalOpen(true);
        },
        (error) => {
          if (error) {
            setLoading(false);
            setError(true);
            setModalOpen(true);
          }
        }
      );
    // TODO: Review if needed
    // e.target.reset();
  };
  return (
    <>
      {loading && <Loader />}

      <Container>
        <Title>
          <PrimaryText>Want To Work</PrimaryText> With Me?
        </Title>

        <ContactWrapper>
          <Image src="/contact-hero.png" alt="Contact illustration" />
          <ContactFormWrapper>
            <form ref={form} onSubmit={sendEmail}>
              <Title as="h3">
                Get In <PrimaryText>Touch</PrimaryText>
              </Title>
              <Input id="name" label="Name" />
              <Input id="email" label="Email" />
              <TextArea id="message" label="Message" rows={8} />
              <Button disabled={disabled}>Send</Button>
            </form>
          </ContactFormWrapper>
        </ContactWrapper>
      </Container>

      {error ? (
        <FailModal onClose={handleClose} modalOpen={modalOpen} />
      ) : (
        <SuccessModal onClose={handleClose} modalOpen={modalOpen} />
      )}
    </>
  );
};
