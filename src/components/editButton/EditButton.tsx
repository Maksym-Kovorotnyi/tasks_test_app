import { useDispatch } from "react-redux";
import { findTask } from "../../redux/tasksSlice";
import { TasksListProps } from "../../types/types";
import { Button } from "react-bootstrap";

function EditButton({ modalOpen, formChange }: TasksListProps) {
  const dispatch = useDispatch();

  function handleEditBtn(e: any) {
    console.dir(e.target);
    dispatch(findTask(e.target.parentElement.parentElement.id));
    modalOpen();
    formChange(true);
  }

  return (
    <>
      <Button variant="outline-info" onClick={handleEditBtn} type="button">
        Edit
      </Button>{" "}
    </>
  );
}

export default EditButton;
