import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksSlice";

function DeleteButton() {
  const dispatch = useDispatch();
  function handleDelete(e: any) {
    dispatch(deleteTask(e.target.parentElement.id));
  }
  return (
    <>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </>
  );
}

export default DeleteButton;
