import AddTaskButton from "../components/addTaskButton/AddTaskButton";
import EditForm from "../components/editForm/EditForm";
import Modal from "../components/modal/Modal";
import NewTaskForm from "../components/newTaskForm/NewTaskForm";
import TasksList from "../components/tasksList/TasksList";
import { useState } from "react";

function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFormOnModal, setEditFormOnModal] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e: any) => {
    if (e.target.className === "modal-overlay") {
      setIsModalOpen(false);
      setEditFormOnModal(false);
    }
  };
  return (
    <>
      <h1>My tasks</h1>
      <AddTaskButton modalOpen={openModal} />
      <TasksList formChange={setEditFormOnModal} modalOpen={openModal} />
      {isModalOpen ? (
        <Modal onClose={closeModal}>
          {editFormOnModal ? <EditForm /> : <NewTaskForm />}
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

export default TasksPage;
