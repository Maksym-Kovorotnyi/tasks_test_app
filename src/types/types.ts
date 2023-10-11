import { ReactNode } from "react";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: boolean;
};
export type RootState = {
  tasksList: Task[];
};

export type ModalProps = {
  children: ReactNode;
  onClose: (e: any) => void;
  modalOpen?: () => void;
};
