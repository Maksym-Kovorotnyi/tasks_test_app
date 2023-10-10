import { useSelector } from "react-redux";
import { RootState, Task } from "../../types/types";

function TasksItem() {
  const tasksList = useSelector((state: RootState) => state.tasksList);
  return (
    <>
      {tasksList?.map((task: Task) => {
        return (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </li>
        );
      })}
    </>
  );
}

export default TasksItem;
