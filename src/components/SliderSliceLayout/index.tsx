import { Container } from "@components/Container";
import { Title } from "@components/Title";
import { SliderSliceLayoutWrapper, TitleWrapper } from "./styles";
import type { SliderSliceLayoutProps } from "./types";

export const SliderSliceLayout = ({
  id,
  title,
  children,
}: SliderSliceLayoutProps) => (
  <SliderSliceLayoutWrapper id={id}>
    <Container as="div">
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      {children}
    </Container>
  </SliderSliceLayoutWrapper>
);
