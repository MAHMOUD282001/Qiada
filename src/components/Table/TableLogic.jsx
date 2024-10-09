import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { toast } from "react-toastify";

function TableLogic() {
  const { isModalOpen, modalType, openModal, closeModal } =
    useContext(ModalContext);
  const [soldiers, setSoldiers] = useState([]);

  const handleDelete = (id) => {
    const storedSoldiers = JSON.parse(localStorage.getItem("soldiers")) || [];
    const updatedSoldiers = storedSoldiers.filter(
      (soldier) => soldier.id !== id
    );
    localStorage.setItem("soldiers", JSON.stringify(updatedSoldiers));
    setSoldiers(updatedSoldiers);
    toast.success("تم حذف الجندى بنجاح");
  };

  useEffect(() => {
    const storedSoldiers = JSON.parse(localStorage.getItem("soldiers")) || [];
    setSoldiers(storedSoldiers);
  }, [isModalOpen]);

  return [soldiers, handleDelete, openModal, isModalOpen];
}

export default TableLogic;
