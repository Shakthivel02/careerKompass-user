import styled from "styled-components";

interface FlexWrapperProps {
  noPadding?: boolean;
  justifyContent?: string;
  height?: number;
  hasBorder?: boolean;
  marginTop?: number;
  marginRight?: number;
}

const FlexWrapper = styled.div<FlexWrapperProps>`
  padding: ${({ noPadding }) => (noPadding ? "0" : "12px 0")};
  display: flex;
  flex-wrap: wrap;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  margin: ${({ noPadding }) => (noPadding ? "0" : "12px 0px")};
  ${({ hasBorder, theme }) =>
    hasBorder && `border-bottom: 1px solid ${theme.border}`};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}%` : null)};
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}%` : null};
`;

export default FlexWrapper;
