import FormUser from "./Form";
import Button from "../../components/Button";
import { useModal } from "../../hooks/useModal";

export default ({ onActionSubmit, cleanEditData, defaultValue }: any) => {
  const { openModal, closeModal, ModalWrapper } = useModal();

  return (
    <>
      <Button
        onClick={() => {
          cleanEditData();
          openModal();
        }}
      >
        New
      </Button>
      <ModalWrapper title="New Category">
        <FormUser
          onActionSubmit={onActionSubmit}
          defaultValue={defaultValue}
          closeModal={closeModal}
        />
      </ModalWrapper>
    </>
  );
};
