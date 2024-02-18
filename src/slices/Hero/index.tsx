import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { PrimaryText } from "@components/PrimaryText";
import {
  HeroContent,
  Strapline,
  Text,
  HeroButtonWrapper,
  StatsWrapper,
  Stat,
  Label,
  Divider,
} from "./styles";
import { Title } from "@components/Title";
import { links } from "@constants/App.constants";

export const Hero = () => (
  <Container as="main" variant="secondary">
    <HeroContent>
      <Strapline>
        <PrimaryText>UI/UX DEVELOPER</PrimaryText>
      </Strapline>
      <Title as="h1">
        Hello! I'm Joe Napper, <br />
        Senior Frontend Developer
      </Title>
      <Text>
        Specialising in UI/UX, performance and accessibility, I build high end
        applications from the ground up using modern technologies.
      </Text>
      <HeroButtonWrapper>
        <Button>
          <a href="#projects">Projects</a>
        </Button>
        <Button variant="secondary">
          <a href={links.linkedIn} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </Button>
      </HeroButtonWrapper>
      <StatsWrapper>
        <Stat>
          <PrimaryText>10 +</PrimaryText>
          <Label>Years Of Experience</Label>
        </Stat>
        <Divider />
        <Stat>
          <PrimaryText>50 +</PrimaryText>
          <Label>Successful Projects</Label>
        </Stat>
        <Divider />
        <Stat>
          <PrimaryText>100%</PrimaryText>
          <Label>Client Satisfaction</Label>
        </Stat>
      </StatsWrapper>
    </HeroContent>
  </Container>
);
