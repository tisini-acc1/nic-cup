import { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
      <div className="bg-white p-5 rounded-md shadow-lg w-4/5 max-w-sm md:max-w-md mx-auto transition-transform duration-300 transform-gpu flex flex-col z-50">
        {children}
        <button onClick={onClose} className="flex justify-end">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
