export type Task = {
  id: number;
  title: string;
  description: string;
  status: boolean;
};
export type RootState = {
  tasksList: Task[];
};
