import { colors } from '../../const/theme'
import Button from 'react-bootstrap/esm/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.button.primary} !important;
  background-color: ${({ theme }) => theme.button.primary};
  color: ${colors.white};
  border: none;
  &:focus,
  &: hover,
  &:active {
    background: ${({ theme }) => theme.button.secondary} !important;
    color: ${colors.black};
    border: none;
  }
  margin: auto 4px;
`

export default StyledButton
