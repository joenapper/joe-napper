import { Button } from "../Button";
import { Title } from "../Title";
import {
  ArticleCardWrapper,
  Image,
  ContentWrapper,
  TitleWrapper,
  Text,
  ButtonWrapper,
} from "./styles";
import type { ArticleCardProps } from "./types";

export const ArticleCard = ({ image, title, text, link }: ArticleCardProps) => (
  <ArticleCardWrapper>
    <Image
      src={image}
      alt={`${title} Article Illustration`}
      draggable="false"
    />
    <ContentWrapper>
      <TitleWrapper>
        <Title as="h3">{title}</Title>
      </TitleWrapper>
      <Text>{text}</Text>
      <ButtonWrapper>
        <Button variant="quaternary">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Read Article
          </a>
        </Button>
      </ButtonWrapper>
    </ContentWrapper>
  </ArticleCardWrapper>
);
