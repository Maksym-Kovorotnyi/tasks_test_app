import { ModalProps } from "../../types/types";
import { AddTaskIcon } from "../iconsComponents/IconsComponents";

const AddTaskButton: React.FC<Pick<ModalProps, "modalOpen">> = ({
  modalOpen,
}) => {
  return (
    <>
      <AddTaskIcon modalOpen={modalOpen} />
    </>
  );
};

export default AddTaskButton;
