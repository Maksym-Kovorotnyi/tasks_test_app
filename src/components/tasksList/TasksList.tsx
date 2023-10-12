import { RootState, TasksListProps } from "../../types/types";
import { CSSProperties } from "react";
import SortInput from "../sortSelector/SortSelector";
import TasksItem from "../tasksItem/TasksItem";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

function TasksList({ formChange, modalOpen }: TasksListProps) {
  const tasksList = useSelector((state: RootState) => state.tasksList);
  const customListGroupStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };
  return (
    <>
      {tasksList.length >= 2 ? <SortInput /> : ""}
      <ListGroup as="ul" style={customListGroupStyles}>
        <TasksItem formChange={formChange} modalOpen={modalOpen} />
      </ListGroup>
    </>
  );
}

export default TasksList;
