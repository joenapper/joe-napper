import { Slider } from "../../components/Slider";
import { Container } from "../../components/Container";
import { PrimaryText } from "../../components/PrimaryText";
import { Title } from "../../components/Title";

export const RecentProjects = () => (
  <Container>
    <Title>
      <PrimaryText>Recent</PrimaryText> Projects
    </Title>
    <Slider />
  </Container>
);
