import { useSelector } from "react-redux";
import { RootState, Task } from "../../types/types";
import DeleteButton from "../deleteButton/DeleteButton";

function TasksItem() {
  const tasksList = useSelector((state: RootState) => state.tasksList);
  return (
    <>
      {tasksList?.map((task: Task) => {
        return (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <DeleteButton />
          </li>
        );
      })}
    </>
  );
}

export default TasksItem;
