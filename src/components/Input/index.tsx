import { ChangeEvent, ReactElement } from 'react'
import { InputProps } from './typings'
import { InputWrapper } from './subcomponents'
import { Label } from '../../typography'
import { Form } from "react-bootstrap";

const Input = ({
  label,
  isRequired,
  value,
  width,
  isDisabled,
  inputType,
  error,
  name,
  onBlur,
  placeholder = "",
  onChange,
  onClick,
  height
}: InputProps): ReactElement => {
  return (
    <InputWrapper width={width} isDisabled={isDisabled} height={height}>
      {label && (
        <Label htmlFor="edu-input">
          {label}
          {isRequired && <strong>*</strong>}
        </Label>
      )}
      <Form.Control
        type={inputType || "text" || "file"}
        name={name || ""}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange && onChange(e.target.value)
        }
        onBlur={() => onBlur && onBlur()}
        placeholder={placeholder}
        //isValid={!error && !!value}
        isInvalid={!!error}
        onClick={onClick}
        autoComplete="off"
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </InputWrapper>
  );
};

export const TextArea = ({
  label,
  isRequired,
  value,
  width,
  isDisabled,
  inputType,
  error,
  onBlur,
  placeholder = "",
  onChange,
  onClick,
  hasPadding = true,
}: InputProps): ReactElement => {
  return (
    <InputWrapper width={width} isDisabled={isDisabled} hasPadding={hasPadding}>
      {label && (
        <Label htmlFor="edu-input">
          {label}
          {isRequired && <strong>*</strong>}
        </Label>
      )}
      <Form.Control
        type={inputType || "textarea" || "file"}
        value={value}
        as="textarea"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange && onChange(e.target.value)
        }
        onBlur={() => onBlur && onBlur()}
        placeholder={placeholder}
        //isValid={!error && !!value}
        isInvalid={!!error}
        onClick={onClick}
        autoComplete="off"
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </InputWrapper>
  );
};


export default Input
