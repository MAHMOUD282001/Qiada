import React, { useContext, useEffect, useState } from "react";
import { IoTrash } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { ModalContext } from "../../context/ModalContext";
import SoldierModal from "../SoldierModal/SoldierModal";
import CommonBtn from "../common/CommonBtn";
import TableLogic from "./TableLogic";

function Table() {
  const [soldiers, handleDelete, openModal, isModalOpen] = TableLogic();

  return (
    <>
      <h1 className="text-center my-7 text-[20px] sm:text-2xl md:text-3xl">اسماء عساكر سرية القيادة</h1>
      <div className="relative overflow-x-auto table-content shadow-lg rounded-[4px]">
        <table className="text-sm text-gray-500 dark:text-gray-400 text-center w-[900px] lg:w-full">
          {soldiers.length > 0 ? (
            <>
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    م
                  </th>
                  <th scope="col" className="px-6 py-3">
                    الاسم
                  </th>
                  <th scope="col" className="px-6 py-3">
                    رقم التليفون
                  </th>
                  <th scope="col" className="px-6 py-3">
                    حالة العسكرى
                  </th>
                  <th scope="col" className="px-6 py-3">
                    اخر عوده
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تعديل / حذف
                  </th>
                </tr>
              </thead>
              <tbody>
                {soldiers.map((soldier, index) => (
                  <tr
                    key={soldier.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 ">{index + 1}</td>
                    <td className="px-6 py-4">{soldier.name}</td>
                    <td className="px-6 py-4">{soldier.phone}</td>
                    <td className="px-6 py-4">{soldier.status}</td>
                    <td className="px-6 py-4">{soldier.date}</td>
                    <td className="px-6 py-4 flex gap-4 items-center justify-center">
                      <IoTrash
                        size={20}
                        color="red"
                        className="cursor-pointer"
                        onClick={() => handleDelete(soldier.id)}
                      />
                      <MdEdit
                        size={20}
                        color="blue"
                        className="cursor-pointer"
                        onClick={() => openModal("edit", soldier)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>{" "}
            </>
          ) : (
            ""
          )}
        </table>

        {isModalOpen ? <SoldierModal /> : ""}
      </div>

      <CommonBtn
        style={"bg-[#D9F99D] w-full mt-7"}
        handleOnClick={openModal}
      >
        اضافة جندى
      </CommonBtn>
    </>
  );
}

export default Table;
