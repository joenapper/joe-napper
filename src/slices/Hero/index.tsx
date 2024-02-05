import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { PrimaryText } from "../../components/PrimaryText";
import { HeroContent, Title, Text, HeroButtonWrapper } from "./styles";

export const Hero = () => (
  <Container as="main">
    <HeroContent>
      <PrimaryText>UI/UX DEVELOPER</PrimaryText>
      <Title>
        Hello! I'm Joe Napper, <br />
        Senior Frontend Developer
      </Title>
      <Text>
        Specialising in UI/UX, performance and accessibility, I build high end
        applications from the ground up using modern technologies.
      </Text>
      <HeroButtonWrapper>
        <Button>Projects</Button>
        <Button variant="secondary">LinkedIn</Button>
      </HeroButtonWrapper>
    </HeroContent>
  </Container>
);
