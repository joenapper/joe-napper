import { Container } from "@components/Container";
import { PrimaryText } from "@components/PrimaryText";
import { Title } from "@components/Title";
import { Text, TechStack } from "./styles";

export const About = () => (
  <Container>
    <Title>
      <PrimaryText>About</PrimaryText> Me
    </Title>

    {/* TODO: Review copy */}
    <Text>
      From design and development to testing and deployment, I have built many
      high end applications from scratch and updated existing apps to keep up
      with modern design trends.
    </Text>
    <Text>
      During my career I have solved numerous problems using HTML, CSS and
      JavaScript (to name a few) along with the relevant frameworks and
      supporting technologies.
    </Text>

    <TechStack>
      <img src="/tech-stack/HTML5.png" alt="HTML5" />
      <img src="/tech-stack/CSS3.png" alt="CSS3" />
      <img src="/tech-stack/javascript.png" alt="JavaScript" />
      {/* Typescript */}
      <img src="/tech-stack/react.png" alt="React JS" />
      {/* Next JS */}
      {/* GraphQL */}
    </TechStack>
  </Container>
);
