import { Slider } from "@components/Slider";
import { Container } from "@components/Container";
import { PrimaryText } from "@components/PrimaryText";
import { Title } from "@components/Title";
import { ArticlesWrapper, TitleWrapper } from "./styles";
import { items, responsive } from "./config";

// TODO: Align Projects, Clients & Articles layout
export const Articles = () => (
  <ArticlesWrapper>
    <Container as="div">
      <TitleWrapper>
        <Title>
          <PrimaryText>My</PrimaryText> Articles
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
        partialVisible
      />
    </Container>
  </ArticlesWrapper>
);
