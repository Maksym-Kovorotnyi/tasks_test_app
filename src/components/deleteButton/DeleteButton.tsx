import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksSlice";
import { Button } from "react-bootstrap";

function DeleteButton() {
  const dispatch = useDispatch();
  function handleDelete(e: any) {
    dispatch(deleteTask(e.target.parentElement.parentElement.id));
  }
  return (
    <>
      <Button variant="outline-danger" onClick={handleDelete} type="button">
        Delete
      </Button>{" "}
    </>
  );
}

export default DeleteButton;
