import { Button } from "../Button";
import { Title } from "../Title";
import {
  ArticleCardWrapper,
  Image,
  ContentWrapper,
  Text,
  ButtonWrapper,
} from "./styles";
import type { ArticleCardProps } from "./types";

// TODO: Merge with Card component
export const ArticleCard = ({ image, title, text }: ArticleCardProps) => (
  <ArticleCardWrapper>
    <Image
      src={image}
      alt={`${title} Article Illustration`}
      draggable="false"
    />
    <ContentWrapper>
      <Title as="h3">{title}</Title>
      <Text>{text}</Text>
      <ButtonWrapper>
        <Button variant="quaternary">Read More</Button>
      </ButtonWrapper>
    </ContentWrapper>
  </ArticleCardWrapper>
);
