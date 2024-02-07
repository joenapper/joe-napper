import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { PrimaryText } from "@components/PrimaryText";
import {
  HeroContent,
  Title,
  Text,
  HeroButtonWrapper,
  StatsWrapper,
  Stat,
  Label,
} from "./styles";

export const Hero = () => (
  <Container as="main">
    <HeroContent>
      <PrimaryText>UI/UX DEVELOPER</PrimaryText>
      {/* TODO: Review to replace with Title component as='h1'  */}
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
      <StatsWrapper>
        <Stat>
          <PrimaryText>10 +</PrimaryText>
          <Label>Years Of Experience</Label>
        </Stat>
        <Stat>
          <PrimaryText>50 +</PrimaryText>
          <Label>Successful Projects</Label>
        </Stat>
        <Stat>
          <PrimaryText>100%</PrimaryText>
          <Label>Client Satisfaction</Label>
        </Stat>
      </StatsWrapper>
    </HeroContent>
  </Container>
);
