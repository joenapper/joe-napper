import {
  useState,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  ChangeEvent,
} from "react";

import { Cancel } from "@icons/Cancel";
import { FormLabel } from "../FormLabel";
import { setNativeValue } from "../utils";
import { ClearButton, StyledInput, InputContainer } from "./styles";
import type { InputProps, InputRef } from "./types";

export const Input = forwardRef<InputRef<HTMLInputElement>, InputProps>(
  ({ label, id, placeholder = " ", onChange, ...props }: InputProps, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!);
    const [isDirty, setDirty] = useState(!!props.defaultValue);
    const clearInput = useCallback(() => {
      if (inputRef.current) {
        setNativeValue(inputRef.current, "");
        inputRef.current.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }, [inputRef]);

    return (
      <FormLabel label={label} id={id}>
        <InputContainer>
          <StyledInput
            id={id}
            ref={inputRef}
            placeholder={placeholder}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setDirty(!!event.currentTarget.value);
              if (onChange) {
                onChange(event);
              }
            }}
            {...props}
          />
          {isDirty && !props.disabled && (
            <ClearButton
              onClick={clearInput}
              tabIndex={0}
              role="button"
              aria-label="clear"
            >
              <Cancel />
            </ClearButton>
          )}
        </InputContainer>
      </FormLabel>
    );
  }
);
