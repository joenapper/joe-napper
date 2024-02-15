import { Slider } from "@components/Slider";
import { Container } from "@components/Container";
import { PrimaryText } from "@components/PrimaryText";
import { Title } from "@components/Title";
import { ClientsWrapper, TitleWrapper } from "./styles";
import { items, responsive } from "./config";

export const Clients = () => (
  <ClientsWrapper>
    <Container as="div">
      <TitleWrapper>
        <Title>
          <PrimaryText>Companies</PrimaryText> I've Worked with
        </Title>
      </TitleWrapper>
      <Slider
        items={items}
        autoPlay
        autoPlaySpeed={1}
        transitionDuration={3000}
        customTransition="all 3s linear"
        rewind={true}
        responsive={responsive}
        arrows={false}
        swipeable={false}
      />
    </Container>
  </ClientsWrapper>
);
