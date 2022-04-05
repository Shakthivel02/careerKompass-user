import { ReactElement } from 'react'
import { H2, Span } from '../../typography'
import Title from './subcomponent'
import { colors } from '../../const/theme'

interface SectionProps {
    title: string
    helpText?: string
    hasBorder?: boolean
}

const SectionTitle = ({
    title,
    helpText,
    hasBorder
}: SectionProps): ReactElement => {
    return (
        <Title hasBorder={hasBorder}>
            <H2 color={colors.gray}>{title}</H2>
            {helpText && (
                <div>
                    <Span isHelpText={true}>{helpText}</Span>
                </div>
            )}
        </Title>
    )
}

export default SectionTitle