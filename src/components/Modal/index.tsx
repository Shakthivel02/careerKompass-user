import { ReactElement } from 'react'
import { colors } from '../../const/theme'
import { Body, H3 } from '../../typography'
import ModalProps from './typings'
import { BootstrapModal } from './subcomponent'

const Modal = ({
  title,
  isLargeModal,
  handleCancel,
  children,
}: ModalProps): ReactElement => {
  return (
    <BootstrapModal
      show={true}
      onHide={handleCancel}
      size={isLargeModal ? 'lg' : 'sm'}
      centered={true}
      backdrop="false"
      dialogClassName='dialog'
      keyboard={false}
    >
      <BootstrapModal.Header style={{ border: 'none' }}>
        {title && <H3 color={colors.purple}>{title}</H3>}
      </BootstrapModal.Header>

      <BootstrapModal.Body>
        <Body>  {children && children}</Body>
      </BootstrapModal.Body>

    </BootstrapModal>
  )
}

export default Modal
