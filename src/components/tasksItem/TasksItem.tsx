import { useDispatch, useSelector } from "react-redux";
import { RootState, Task, TasksListProps } from "../../types/types";
import DeleteButton from "../deleteButton/DeleteButton";
import EditButton from "../editButton/EditButton";
import {
  FulfilledTask,
  UnfulfilledTask,
} from "../iconsComponents/IconsComponents";
import { changeTask } from "../../redux/tasksSlice";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { CSSProperties } from "react";

function TasksItem({ formChange, modalOpen }: TasksListProps) {
  const tasksList = useSelector((state: RootState) => state.tasksList);
  const dispatch = useDispatch();

  function handleTaskFullfiled(e: any) {
    const id = e.currentTarget.id;
    let changeObjStatus: Task = {
      id: "",
      title: "",
      description: "",
      status: false,
    };
    if (e.target.localName === "svg" || e.target.localName === "path") {
      tasksList?.map((obj) => {
        if (obj.id === id || obj.id === null || obj.id === undefined) {
          changeObjStatus = { ...obj, status: !obj.status };
        }
        return null;
      });
      const indexToChange = tasksList.findIndex((task) => task.id === id);
      dispatch(
        changeTask({
          indexToChange,
          changedTask: changeObjStatus,
        })
      );
    }
  }

  const customItemGroupStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "400px",
    padding: "20px",
  };
  return (
    <>
      {tasksList?.map((task: Task) => {
        return (
          <ListGroup.Item
            key={task.id}
            id={task.id || ""}
            onClick={handleTaskFullfiled}
            style={customItemGroupStyles}
          >
            {task.status ? <FulfilledTask /> : <UnfulfilledTask />}
            <Card.Subtitle
              style={{
                overflowWrap: "break-word",
                wordWrap: "break-word",
              }}
              as="h2"
            >
              {task?.title}
            </Card.Subtitle>
            <Card.Text
              style={{
                overflowWrap: "break-word",
                wordWrap: "break-word",
              }}
            >
              {task?.description}
            </Card.Text>
            <Stack direction="horizontal" gap={3}>
              <DeleteButton />
              <EditButton formChange={formChange} modalOpen={modalOpen} />
            </Stack>
          </ListGroup.Item>
        );
      })}
    </>
  );
}

export default TasksItem;
