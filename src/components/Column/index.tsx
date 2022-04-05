import { ReactElement } from 'react'
import FlexWrapper from '../FlexWrapper'
import { H4, Small } from '../../typography'
import ColumnProps from './typings'
import { colors } from '../../const/theme'

const Column = ({ keyName, value }: ColumnProps): ReactElement => {
  return (
    <FlexWrapper height={50} justifyContent="space-between">
      <H4>{`${keyName}: `}</H4>
      <Small hasPadding color={colors.gray}>
        {value}
      </Small>
    </FlexWrapper>
  )
}

export default Column
