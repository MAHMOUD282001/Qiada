import React from "react";
import { FaEuroSign } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import CommonInput from "../common/CommonInput";
import CommonBtn from "../common/CommonBtn";
import SoldierModalLogic from "./SoldierModalLogic";

function SoldierModal() {
  let [
    modalType,
    soldierData,
    closeModalHandler,
    register,
    errors,
    handleSubmit,
    onSubmit,
  ] = SoldierModalLogic();

  return (
    <div className="w-full h-full bg-[#00000080] fixed top-0 left-0 flex items-center justify-center z-10">
      <div className="w-[785px] h-[calc(100vh_-_165px)] bg-white rounded-[4px] p-[20px] sm:p-[50px] overflow-auto mx-5 relative modal">
        <span
          className="absolute top-4 right-4 cursor-pointer"
          onClick={closeModalHandler}
        >
          <IoClose size={20} />
        </span>

        <h2 className="text-[30px] font-[500] mb-[30px]">
          {modalType === "edit" ? "تعديل بيانات جندى" : "اضافه جندي"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-[20px]">
            <p className="text-[14px] font-[300] mb-1">الاسم</p>
            <CommonInput
              type="text"
              name={"name"}
              value={register("name")}
              defaultValue={modalType === "edit" ? soldierData?.name : ""}
              style="h-[44px] w-full border border-solid border-[#E5E5E5] rounded-[4px] px-[13px] py-[11px]"
              error={errors.name?.message}
            />{" "}
          </div>

          <div className="mt-[20px]">
            <p className="text-[14px] font-[300] mb-1">رقم التليفون</p>
            <CommonInput
              type="text"
              name={"phone"}
              value={register("phone")}
              defaultValue={modalType === "edit" ? soldierData?.phone : ""}
              style="h-[44px] w-full border border-solid border-[#E5E5E5] rounded-[4px] px-[13px] py-[11px]"
              error={errors.phone?.message}
            />{" "}
          </div>

          <div className="mt-[20px]">
            <p className="text-[14px] font-[300] mb-1">حالة الجندى</p>
            <CommonInput
              type="text"
              name={"status"}
              value={register("status")}
              defaultValue={modalType === "edit" ? soldierData?.status : ""}
              style="h-[44px] w-full border border-solid border-[#E5E5E5] rounded-[4px] px-[13px] py-[11px]"
              error={errors.status?.message}
            />{" "}
          </div>

          <div className="mt-[20px]">
            <p className="text-[14px] font-[300] mb-1">اخر عوده</p>
            <CommonInput
              type="date"
              name={"date"}
              value={register("date")}
              defaultValue={modalType === "edit" ? soldierData?.date : ""}
              style="h-[44px] w-full border border-solid border-[#E5E5E5] rounded-[4px] px-[13px] py-[11px]"
              error={errors.date?.message}
            />{" "}
          </div>

          <CommonBtn style={"bg-[#D9F99D] mt-[30px] w-full"} type={"submit"}>
            {modalType === "edit" ? "تعديل" : "اضافه جندي"}
          </CommonBtn>
        </form>
      </div>
    </div>
  );
}

export default SoldierModal;
