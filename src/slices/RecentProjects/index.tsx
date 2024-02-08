import { Slider } from "@components/Slider";
import { Container } from "@components/Container";
import { PrimaryText } from "@components/PrimaryText";
import { Title } from "@components/Title";
import { RecentProjectsWrapper, TitleWrapper } from "./styles";

export const RecentProjects = () => (
  <RecentProjectsWrapper>
    <Container as="div">
      <TitleWrapper>
        <Title>
          <PrimaryText>Recent</PrimaryText> Projects
        </Title>
      </TitleWrapper>
      <Slider />
    </Container>
  </RecentProjectsWrapper>
);
