import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { Cancel } from "@icons/Cancel";
import { StyledTextArea, TextAreaWrapper } from "./styles";
import { FormLabel } from "../FormLabel";
import type { TextAreaProps, TextAreaRef } from "./types";
import { ClearButton } from "../Input/styles";
import { setNativeValue } from "../utils";

export const TextArea = forwardRef<
  TextAreaRef<HTMLTextAreaElement>,
  TextAreaProps
>(
  (
    { label, placeholder = " ", name, id, onChange, ...props }: TextAreaProps,
    ref
  ) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => textAreaRef.current!);
    const [isDirty, setDirty] = useState(!!props.defaultValue);
    const clearTextArea = useCallback(() => {
      if (textAreaRef.current) {
        setNativeValue(textAreaRef.current, "");
        textAreaRef.current.dispatchEvent(
          new Event("input", { bubbles: true })
        );
      }
    }, [textAreaRef]);
    return (
      <FormLabel label={label} id={id}>
        <TextAreaWrapper>
          <StyledTextArea
            name={name}
            placeholder={placeholder}
            id={id}
            ref={textAreaRef}
            onChange={(event) => {
              setDirty(!!event.currentTarget.value);
              if (onChange) {
                onChange(event);
              }
            }}
            {...props}
          />
          {isDirty && !props.disabled && (
            <ClearButton
              onClick={clearTextArea}
              tabIndex={0}
              role="button"
              aria-label="clear"
            >
              <Cancel />
            </ClearButton>
          )}
        </TextAreaWrapper>
      </FormLabel>
    );
  }
);
