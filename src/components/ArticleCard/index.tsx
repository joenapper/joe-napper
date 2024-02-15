import { Button } from "../Button";
import { Title } from "../Title";
import {
  ArticleCardWrapper,
  Image,
  ContentWrapper,
  Text,
  ButtonWrapper,
} from "./styles";

// TODO: Merge with Card component
export const ArticleCard = () => (
  <ArticleCardWrapper>
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
  </ArticleCardWrapper>
);
