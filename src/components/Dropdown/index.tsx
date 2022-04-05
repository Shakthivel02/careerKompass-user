import { ReactElement } from "react";
import Multiselect from "multiselect-react-dropdown";
import { DropdownProps } from "./typings";
import { DropdownWrapper, Title, ErrorWrapper } from "./subcomponents";

const Dropdown = ({
  width,
  isDisabled,
  title,
  isRequired,
  singleSelect,
  handleSelect,
  error,
  dropdownList,
  placeholder,
}: DropdownProps): ReactElement => {
  let searchBox;
  if (error) {
    searchBox = {
      border: "1px solid #e90a32",
    };
  }

  return (
    <DropdownWrapper
      width={width}
      isDisabled={isDisabled}
      id="editable-dropdown"
    >
      {title && (
        <Title>
          {`${title}`}
          {isRequired && <strong>*</strong>}
        </Title>
      )}
      <Multiselect
        singleSelect={singleSelect || false}
        displayValue="name"
        showArrow={true}
        placeholder={placeholder}
        onRemove={function noRefCheck() {}}
        onSelect={handleSelect}
        options={dropdownList}
        style={{
          chips: {
            background: "#f47f34",
            color: "#fff",
          },
          multiselectContainer: {
            color: "#f47f34",
            background: "#fff",
          },
          option: {
            color: "#f47f34",
            background: "#fff",
          },
          ...{ searchBox },
        }}
      />
      <ErrorWrapper>{error}</ErrorWrapper>
    </DropdownWrapper>
  );
};

export default Dropdown;
