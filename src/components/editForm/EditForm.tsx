import { useDispatch, useSelector } from "react-redux";
import { RootState, Task } from "../../types/types";
import { changeTask } from "../../redux/tasksSlice";
import { Button, Form } from "react-bootstrap";

function EditForm() {
  const dispatch = useDispatch();
  const taskId = useSelector(
    (state: Pick<RootState, "idToChange">) => state.idToChange
  );
  const tasksList = useSelector((state: RootState) => state.tasksList);
  const taskObj = tasksList.filter((obj) => obj.id === taskId) as Task[];
  const indexToChange = tasksList.findIndex((task) => task.id === taskId);

  function handleFormSubmit(e: any) {
    dispatch(
      changeTask({
        indexToChange,
        changedTask: {
          id: taskId,
          title: e.currentTarget[0].value,
          description: e.currentTarget[1].value,
          status: false,
        },
      })
    );
  }

  return (
    <>
      <Form onSubmit={handleFormSubmit} style={{ padding: "20px" }}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            defaultValue={taskObj[0].title}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            name="description"
            defaultValue={taskObj[0].description}
            style={{ resize: "none", marginBottom: "10px" }}
          />
        </Form.Group>

        <Button variant="outline-info" type="submit">
          Accept changes
        </Button>
      </Form>
    </>
  );
}

export default EditForm;
