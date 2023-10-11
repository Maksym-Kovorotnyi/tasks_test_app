import AddTaskButton from "../components/addTaskButton/AddTaskButton";
import Modal from "../components/modal/Modal";
import NewTaskForm from "../components/newTaskForm/NewTaskForm";
import TasksList from "../components/tasksList/TasksList";
import { useState } from "react";

function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e: any) => {
    console.dir(e.target);
    if (e.target.className === "modal-overlay") {
      setIsModalOpen(false);
    }
  };
  return (
    <>
      <h1>My tasks</h1>
      <AddTaskButton modalOpen={openModal} />
      <TasksList />
      {isModalOpen ? (
        <Modal onClose={closeModal}>
          <NewTaskForm />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

export default TasksPage;
