import styled from 'styled-components'
import { weight } from '../../const/fonts'
import { InputWrapperProps } from './typings'

export const InputWrapper = styled.div<InputWrapperProps>`
  width: ${({ width }) => width || "100%"};
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ hasPadding }) => (hasPadding ? "5px" : "0")};

  @media (max-width: 415px) {
    width: 100%;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
pointer-events: none;
opacity: 0.7;
`}
`;

export const InputLabel = styled.label`
  font-weight: ${weight.bold};
`
