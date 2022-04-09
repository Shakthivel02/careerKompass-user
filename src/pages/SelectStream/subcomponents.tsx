import { ReactElement } from "react";
import { UserFilterProps } from "./typings";
import {
  FlexWrapper,
  DropdownWrapper,
  ActionButton,
  Dropdown,
} from "../../components";

export const UserFilterSection = ({
  handleSearch,
  Stream,
  handleStreamSelect,
}: UserFilterProps): ReactElement => {
  return (
    <>
      <FlexWrapper>
        <DropdownWrapper>
          <Dropdown
            isRequired
            dropdownList={Stream}
            singleSelect
            placeholder={"Select Level"}
            handleSelect={handleStreamSelect}
          />
        </DropdownWrapper>
        <div>
          <ActionButton onClick={handleSearch} marginTop="2">
            Submit
          </ActionButton>
        </div>
      </FlexWrapper>
    </>
  );
};
