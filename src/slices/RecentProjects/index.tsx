import { Slider } from "@components/Slider";
import { Container } from "@components/Container";
import { PrimaryText } from "@components/PrimaryText";
import { Title } from "@components/Title";
import { RecentProjectsWrapper, TitleWrapper } from "./styles";
import { items, responsive } from "./config";

export const RecentProjects = () => (
  <RecentProjectsWrapper>
    <Container as="div">
      <TitleWrapper>
        <Title>
          <PrimaryText>Recent</PrimaryText> Projects
        </Title>
      </TitleWrapper>
      <Slider
        items={items}
        responsive={responsive}
        swipeable
        showDots
        keyBoardControl
        removeArrowOnDeviceType={["tablet", "mobile"]}
        draggable
        centerMode
      />
    </Container>
  </RecentProjectsWrapper>
);
