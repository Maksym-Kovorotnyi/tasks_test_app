import { useDispatch } from "react-redux";
import { findTask } from "../../redux/tasksSlice";
import { TasksListProps } from "../../types/types";

function EditButton({ modalOpen, formChange }: TasksListProps) {
  const dispatch = useDispatch();

  function handleEditBtn(e: any) {
    dispatch(findTask(e.target.parentElement.id));
    modalOpen();
    formChange(true);
  }

  return (
    <>
      <button onClick={handleEditBtn} type="button">
        Edit
      </button>
    </>
  );
}

export default EditButton;
