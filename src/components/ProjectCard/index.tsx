import { Button } from "../Button";
import { Title } from "../Title";
import {
  ProjectCardWrapper,
  Image,
  ContentWrapper,
  Text,
  ButtonWrapper,
} from "./styles";
import type { ProjectCardProps } from "./types";

export const ProjectCard = ({ image, title, type, text }: ProjectCardProps) => (
  <ProjectCardWrapper>
    <Image
      src={image}
      alt={`${title} ${type} Illustration`}
      draggable="false"
    />
    <ContentWrapper>
      <Title as="h3">
        {title} {type}
      </Title>
      <Text>{text}</Text>
      <ButtonWrapper>
        <Button variant="quaternary">View Project</Button>
      </ButtonWrapper>
    </ContentWrapper>
  </ProjectCardWrapper>
);
