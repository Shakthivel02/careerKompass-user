export interface DropdownListProps {
  name: string;
  id: string;
}

export interface DropdownWrapperProps {
  width?: string;
  isDisabled?: boolean;
}

export interface DropdownProps {
  placeholder?: string;
  isDisabled?: boolean;
  error?: string;
  singleSelect?: boolean;
  isRequired?: boolean;
  title?: string;
  width?: string;
  dropdownList?: Array<DropdownListProps>;
  defaultValue?: DropdownListProps | null;
  //eslint-disable-next-line no-unused-vars
  handleSelect: (arg: any) => void;
  //eslint-disable-next-line no-unused-vars
  handleRemove?: (arg: any) => void;
}
