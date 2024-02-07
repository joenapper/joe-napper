import { Button } from "../Button";
import { Title } from "../Title";
import {
  CardWrapper,
  Image,
  ContentWrapper,
  Text,
  ButtonWrapper,
} from "./styles";

export const Card = () => (
  <CardWrapper>
    <Image src="/sample.png" alt="sample" draggable="false" />
    <ContentWrapper>
      <Title as="h3">E-commerce Website</Title>
      <Text>
        I created an e-commerce website for a clothing brand to optimise sales
        and conversions.
      </Text>
      <ButtonWrapper>
        <Button variant="quaternary">View Project</Button>
      </ButtonWrapper>
    </ContentWrapper>
  </CardWrapper>
);
