import { useDispatch, useSelector } from "react-redux";
import { RootState, Task } from "../../types/types";
import { changeTask } from "../../redux/tasksSlice";

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
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">
          <input type="text" name="title" defaultValue={taskObj[0].title} />
        </label>
        <label htmlFor="description">
          <textarea name="description" defaultValue={taskObj[0].description} />
        </label>
        <button type="submit">Accept changes</button>
      </form>
    </>
  );
}

export default EditForm;
