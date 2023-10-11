import { TasksListProps } from "../../types/types";
import TasksItem from "../tasksItem/TasksItem";

function TasksList({ formChange, modalOpen }: TasksListProps) {
  return (
    <>
      <ul>
        <TasksItem formChange={formChange} modalOpen={modalOpen} />
      </ul>
    </>
  );
}

export default TasksList;
