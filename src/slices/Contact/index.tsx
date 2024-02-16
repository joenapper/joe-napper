import { Container } from "@components/Container";
import { PrimaryText } from "@components/PrimaryText";
import { Title } from "@components/Title";
import { ContactWrapper, Image, ContactFormWrapper } from "./styles";
import { Input } from "@components/Controls/Input";
import { TextArea } from "@components/Controls/TextArea";
import { Button } from "@components/Button";

export const Contact = () => (
  <Container>
    <Title>
      <PrimaryText>Want To Work</PrimaryText> With Me?
    </Title>

    <ContactWrapper>
      <Image src="/contact-hero.png" alt="Contact illustration" />
      <ContactFormWrapper>
        <Title as="h3">
          Get In <PrimaryText>Touch</PrimaryText>
        </Title>
        <Input id="name" label="Name" />
        <Input id="email" label="Email" />
        <TextArea id="message" label="Message" />
        <Button>Send</Button>
      </ContactFormWrapper>
    </ContactWrapper>
  </Container>
);
