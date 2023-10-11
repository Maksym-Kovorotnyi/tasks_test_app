import { useSelector } from "react-redux";
import { RootState, Task, TasksListProps } from "../../types/types";
import DeleteButton from "../deleteButton/DeleteButton";
import EditButton from "../editButton/EditButton";
import {
  FulfilledTask,
  UnfulfilledTask,
} from "../iconsComponents/IconsComponents";

function TasksItem({ formChange, modalOpen }: TasksListProps) {
  const tasksList = useSelector((state: RootState) => state.tasksList);
  return (
    <>
      {tasksList?.map((task: Task) => {
        return (
          <li key={task.id} id={task.id}>
            {task.status ? <FulfilledTask /> : <UnfulfilledTask />}
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <DeleteButton />
            <EditButton formChange={formChange} modalOpen={modalOpen} />
          </li>
        );
      })}
    </>
  );
}

export default TasksItem;
