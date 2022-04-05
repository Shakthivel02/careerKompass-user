import styled from "styled-components";

export const TableWrapper = styled.div`
  margin-top: 12px;
  border: none;
  --bs-gutter-x: 0;
  font-size: 14px;
  width: 100%;
  > * table {
    margin-bottom: 0;
  }

 `
export const TableRow = styled.tr`
vertical-align: baseline; 
`;

const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.table.background};
  color: ${({ theme }) => theme.table.color}; 
  height: 35px;

`
export default TableHeader;



