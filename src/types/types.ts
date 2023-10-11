import { ReactNode } from "react";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: boolean;
};
export type RootState = {
  tasksList: Task[];
  idToChange?: string | null;
};

export type ModalProps = {
  children: ReactNode;
  onClose: (e: any) => void;
  modalOpen?: () => void;
};

export type TasksListProps = {
  formChange: (value: boolean) => void;
  modalOpen: () => void;
};
