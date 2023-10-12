import AddTaskButton from "../components/addTaskButton/AddTaskButton";
import EditForm from "../components/editForm/EditForm";
import ModalWindow from "../components/modal/Modal";
import NewTaskForm from "../components/newTaskForm/NewTaskForm";
import TasksList from "../components/tasksList/TasksList";
import { useState } from "react";
import CardTitle from "react-bootstrap/CardTitle";

function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFormOnModal, setEditFormOnModal] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditFormOnModal(false);
  };
  return (
    <>
      <CardTitle as="h1" style={{ marginBottom: "50px" }}>
        My tasks:
      </CardTitle>

      <AddTaskButton modalOpen={openModal} />
      <TasksList formChange={setEditFormOnModal} modalOpen={openModal} />
      {isModalOpen ? (
        <ModalWindow onClose={closeModal}>
          {editFormOnModal ? <EditForm /> : <NewTaskForm />}
        </ModalWindow>
      ) : (
        ""
      )}
    </>
  );
}

export default TasksPage;
