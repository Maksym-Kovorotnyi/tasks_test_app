import { ReactNode } from "react";

export type Task = {
  id: string | undefined | null;
  title: string;
  description: string;
  status: boolean;
};
export type RootState = {
  tasksList: Task[];
  idToChange?: string | undefined | null;
};

export type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  modalOpen?: () => void;
};

export type TasksListProps = {
  formChange: (value: boolean) => void;
  modalOpen: () => void;
};

export type ChangeTaskProp = {
  indexToChange: number;
  changedTask: {
    id: string | undefined | null;
    title: string;
    description: string;
    status: boolean;
  };
};
