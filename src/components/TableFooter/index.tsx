import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import strings from "../../locale/en";
import {
  TableFooterWrapper,
  NavigationButton,
  PageDisplay,
} from "./subcomponent";
import { TableFooterProps } from "./typing";

const TableFooter = ({
  currentPage,
  totalPages,
  handlePrevious,
  handleNext,
}: TableFooterProps): ReactElement => {
  const {
    tablefooter: { previous, next },
  } = strings;
  return (
    <TableFooterWrapper>
      <NavigationButton
        variant="outline-secondary"
        $isLeft
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <div>
          <FontAwesomeIcon
            icon={["fas", "chevron-left"]}
            style={{ marginRight: 10 }}
          />
          {previous}
        </div>
      </NavigationButton>
      <PageDisplay>{`Page ${currentPage} of ${totalPages}`}</PageDisplay>
      <NavigationButton
        variant="outline-secondary"
        onClick={handleNext}
        disabled={currentPage >= totalPages}
      >
        <div>
          <FontAwesomeIcon
            icon={["fas", "chevron-right"]}
            style={{ marginRight: 10 }}
          />
          {next}
        </div>
      </NavigationButton>
    </TableFooterWrapper>
  );
};

export default TableFooter;
