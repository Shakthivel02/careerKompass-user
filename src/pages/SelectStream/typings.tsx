export interface UserlistActionProps {
  handleEdit: () => void;
  handleView: () => void;
  handleDelete: () => void;
}

export interface UserFilterProps {
  Stream: Array<any>;
  handleStreamSelect: (stream: any) => void;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
}

export interface DropdownListProps {
  name: string;
  id: string;
}
