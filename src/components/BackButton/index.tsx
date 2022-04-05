import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LightButton = styled(Button)`
  background: ${({ theme }) => theme.back?.background};
  height: 45px;
  margin: auto 0;
  border: none;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.back?.hover};
  }
`

interface BackButtonProps {
  handleBack?: () => void
}

const BackButton = ({ handleBack }: BackButtonProps) => (
  <LightButton variant="light" onClick={handleBack}>
    <FontAwesomeIcon icon={['fas', 'chevron-left']} size="lg" />
  </LightButton>
)

export default BackButton

