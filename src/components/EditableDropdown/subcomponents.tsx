import styled from 'styled-components'
import { InputGroup, FormControl } from 'react-bootstrap'
import { colors } from '../../const/theme'
import { EditDropdownWrapperProps } from './typings'
import { H3 } from '../../typography'

export const ListInput = styled(InputGroup)`
  height: 43%;
  #dropdown-id {
    border: 1px solid ${({ theme }) => theme.border};
    &:hover,
    &:focus {
      background: #edfae9;
      color: #111111;
    }
  }
`

export const Title = styled(H3)`
  margin-bottom: 5px;
`

export const DropdownInput = styled(FormControl)`
  background: ${colors.white} !important;

  &.is-valid + #dropdown-id {
    border-color: green;
  }

  &.is-invalid + #dropdown-id {
    border-color: red;
  }
`

export const EditDropdownWrapper = styled.div<EditDropdownWrapperProps>`
  width: ${({ width }) => width || '100%'};
  @media (max-width: 415px) {
    width: 100%;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
pointer-events: none;
opacity: 0.7;
`}
`
