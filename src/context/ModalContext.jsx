import React, { createContext, useState } from "react";

// Create context
export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [soldierData, setSoldierData] = useState({});

  // Function to toggle modal
  const openModal = (type, soldierData) => {
    setModalOpen(true);
    setModalType(type);
    type === "edit" && setSoldierData(soldierData);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalType, soldierData, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
