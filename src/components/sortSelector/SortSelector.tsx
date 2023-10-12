import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types/types";
import {
  sortCompletedTasks,
  sortUncompletedTasks,
} from "../../redux/tasksSlice";
import Form from "react-bootstrap/Form";

function SortInput() {
  const taskList = useSelector((state: RootState) => state.tasksList);
  const dispatch = useDispatch();

  function handleSortLogic(e: any) {
    switch (e.target.value) {
      case "completed":
        dispatch(sortCompletedTasks());
        break;
      case "uncompleted":
        dispatch(sortUncompletedTasks());
        break;
      default:
        return taskList;
    }
  }
  return (
    <>
      <Form.Group className="d-flex align-items-center">
        <Form.Label className="me-2">Sort:</Form.Label>
        <Form.Select
          as="select"
          name="sort"
          size="sm"
          style={{ width: "150px", marginBottom: "10px" }}
          onChange={handleSortLogic}
        >
          <option value="Choose">Choose your option...</option>
          <option value="completed">Sort by completed</option>
          <option value="uncompleted">Sort by uncompleted</option>
        </Form.Select>
      </Form.Group>
    </>
  );
}

export default SortInput;
