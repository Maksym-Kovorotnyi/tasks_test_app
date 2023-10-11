import { useDispatch, useSelector } from "react-redux";
import { RootState, Task, TasksListProps } from "../../types/types";
import DeleteButton from "../deleteButton/DeleteButton";
import EditButton from "../editButton/EditButton";
import {
  FulfilledTask,
  UnfulfilledTask,
} from "../iconsComponents/IconsComponents";
import { changeTask } from "../../redux/tasksSlice";

function TasksItem({ formChange, modalOpen }: TasksListProps) {
  const tasksList = useSelector((state: RootState) => state.tasksList);
  const dispatch = useDispatch();

  function handleTaskFullfiled(e: any) {
    const id = e.currentTarget.id;
    let changeObjStatus;
    tasksList?.map((obj) => {
      if (obj.id === id) {
        changeObjStatus = { ...obj, status: !obj.status };
      }
    });
    const indexToChange = tasksList.findIndex((task) => task.id === id);
    dispatch(
      changeTask({
        indexToChange,
        changedTask: changeObjStatus,
      })
    );
  }
  return (
    <>
      {tasksList?.map((task: Task) => {
        return (
          <li key={task.id} id={task.id} onClick={handleTaskFullfiled}>
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
