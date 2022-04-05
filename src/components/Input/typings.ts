import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type InputType = 'text' | 'dropdown'

export interface InputProps {
  label?: string;
  isRequired?: boolean;
  value: string;
  width?: string;
  isDisabled?: boolean;
  inputType?: "date" | "text" | "file" | "textarea";
  placeholder?: string;
  error?: string;
  name?: string;
  //eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void
  onBlur?: () => void
  onClick?: () => void
  suffix?: IconProp
  height?: string
  hasPadding?: boolean
}

export interface InputWrapperProps {
  width?: string
  isDisabled?: boolean
  hasPadding?: boolean
  height?: string
}

