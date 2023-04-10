import FormUser from "./FormUser";
import Button from "../../components/Button";
import { useModal } from "../../hooks/useModal";

export default ({ id, onActionSubmit, editRow, defaultValue }: any) => {
  const { openModal, closeModal, ModalWrapper } = useModal();

  return (
    <>
      <Button
        customClass="custom--btn-warning mr-4"
        onClick={() => {
          editRow(id);
          openModal();
        }}
      >
        Edit
      </Button>
      <ModalWrapper title="Edit User">
        <FormUser
          onActionSubmit={onActionSubmit}
          defaultValue={defaultValue}
          closeModal={closeModal}
        />
      </ModalWrapper>
    </>
  );
};
