import { Button } from "react-bootstrap";
import { ModalProps } from "../../types/types";

const AddTaskButton: React.FC<Pick<ModalProps, "modalOpen">> = ({
  modalOpen,
}) => {
  return (
    <>
      <Button
        style={{
          position: "fixed",
          left: "90%",
          top: "10%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
        className="me-2"
        onClick={modalOpen}
        variant="primary"
        size="sm"
      >
        Add new task
      </Button>{" "}
    </>
  );
};

export default AddTaskButton;
