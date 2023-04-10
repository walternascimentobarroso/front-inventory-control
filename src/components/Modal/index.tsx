import { MdClose } from "react-icons/md";
import Title from "../Title";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: any;
  button?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  button = false,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 ${
        isOpen ? "" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6 z-10 transform transition-all
        duration-500 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <Title>{title}</Title>
          <button onClick={onClose}>
            <MdClose className="w-6 h-6" />
          </button>
        </div>
        <div>{children}</div>
        {button && (
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
