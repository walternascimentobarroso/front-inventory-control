import Button from "../../components/Button";
import { useModal } from "../../hooks/useModal";

export default ({ id, description, deleteAction }: any) => {
  const { openModal, closeModal, ModalWrapper } = useModal();

  return (
    <>
      <Button customClass="custom--btn-danger" onClick={() => openModal()}>
        Delete
      </Button>
      <ModalWrapper title="Delete User">
        <p>Are you sure you want remover?</p>
        <div className="my-4">
          <strong>{description}</strong>
        </div>
        <div>
          <Button
            customClass="custom--btn-danger w-full"
            type="button"
            onClick={() => {
              deleteAction(id);
              closeModal();
            }}
          >
            Remove
          </Button>
        </div>
      </ModalWrapper>
    </>
  );
};
