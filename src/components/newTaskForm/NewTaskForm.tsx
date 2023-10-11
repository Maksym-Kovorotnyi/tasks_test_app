import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";
import { nanoid } from "nanoid";

function NewTaskForm() {
  const dispatch = useDispatch();

  function handleFormSubmit(e: any): void {
    e.preventDefault();
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
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">
          <input type="text" name="title" required />
        </label>
        <label htmlFor="description">
          <textarea name="description" rows={10} cols={50} />
        </label>
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default NewTaskForm;
