import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";
import { nanoid } from "nanoid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NewTaskForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  function handleFormSubmit(e: any): void {
    dispatch(
      addTask({
        id: nanoid(),
        title: e.currentTarget[0].value,
        description: e.currentTarget[1].value,
        status: false,
      })
    );
    e.currentTarget.reset();
  }
  return (
    <>
      <Form onSubmit={handleFormSubmit} style={{ padding: "20px" }}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            name="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            style={{ resize: "none" }}
          />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Create
        </Button>
      </Form>
    </>
  );
}

export default NewTaskForm;
