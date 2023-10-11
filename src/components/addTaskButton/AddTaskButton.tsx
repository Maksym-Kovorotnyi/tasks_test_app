import { ModalProps } from "../../types/types";

const AddTaskButton: React.FC<Pick<ModalProps, "modalOpen">> = ({
  modalOpen,
}) => {
  return (
    <>
      <svg
        onClick={modalOpen}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>plus</title>
        <path
          fill="#d4d4d5"
          d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"
        ></path>
      </svg>
    </>
  );
};

export default AddTaskButton;