"use client";

import { useState } from "react";
import Modal from "../modal/modal";
import RegisterForm from "../forms/register-form";

export const RegisterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={onClose}
        className="bg-lime-400 hover:bg-white text-black px-4 py-2 rounded-lg font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex"
      >
        Register 2025
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <RegisterForm />
      </Modal>
    </>
  );
};
