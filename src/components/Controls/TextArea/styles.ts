import styled from "styled-components";
import { inputMixin } from "../styles.mixins";

export const StyledTextArea = styled.textarea`
  ${inputMixin};
  resize: none;
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  position: relative;
`;
