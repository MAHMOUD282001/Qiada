import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const schema = yup
  .object({
    name: yup.string().required("ادخل اسم جندى"),
    date: yup.string().required("ادخل تاريخ اخر عوده"),
    status: yup.string().required("ادخل حاله الجندى"),
    phone: yup
      .number()
      .typeError("ادخل رقم تليفون الجندى")
      .required("ادخل رقم تليفون الجندى"),
  })
  .required();

function SoldierModalLogic() {
  const { modalType, closeModal, soldierData } = useContext(ModalContext);

  // Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Close Modal
  const closeModalHandler = () => {
    closeModal();
    document.body.style.overflow = "auto";
  };

  // Handle Submit
  const onSubmit = (data) => {
    console.log(data);
    const storedSoldiers = JSON.parse(localStorage.getItem("soldiers")) || [];

    const editedSoldierIndex = storedSoldiers.findIndex(
      (soldier) => soldier.id === soldierData.id
    );

    if (modalType === "edit") {
      storedSoldiers[editedSoldierIndex] = { id: soldierData.id, ...data };
    } else {
      // Retrieve and update products in localStorage
      storedSoldiers.push({ id: storedSoldiers.length + 1, ...data });
    }

    // Try to store updated products in localStorage
    localStorage.setItem("soldiers", JSON.stringify(storedSoldiers));

    // If successful, close modal and reset body style
    closeModal();
    document.body.style.overflow = "auto";
    toast.success(
      modalType === "edit"
        ? "تم تعديل بيانات الجندى بنجاح"
        : "تم اضافة بيانات الجندى بنجاح"
    );
  };

  // Remove Scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return [
    modalType,
    soldierData,
    closeModalHandler,
    register,
    errors,
    handleSubmit,
    onSubmit,
  ];
}

export default SoldierModalLogic;
