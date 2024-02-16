import styled from "styled-components";

import { inputMixin } from "../styles.mixins";
import { spacing } from "@constants/theme";

export const StyledInput = styled.input`
  ${inputMixin}
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;

  input:-webkit-outer-spin-button,
  input:-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: ${spacing.none};
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input:not([disabled]):not(:placeholder-shown) {
    border: 1px solid;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;

export const ClearButton = styled.span`
  position: absolute;
  top: 22px;
  right: 10px;
  transform: translateY(-50%);
`;
