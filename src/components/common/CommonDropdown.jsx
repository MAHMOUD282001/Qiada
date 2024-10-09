import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function CommonDropdown({
  name,
  onChange,
  dropdownValue,
  isDropDownOpen,
  handleDropdown,
  dropdownValues,
  isFilter,
  error,
}) {
  return (
    <div
      className={`dropdown text-[14px] relative ${
        isFilter ? "w-full sm:flex-1 md:w-[202px] h-[44px]" : "w-full"
      }`}
    >
      <button
        type="button"
        className={`${
          isFilter ? "h-[44px] w-full md:w-[202px]" : "h-[42px] w-full"
        } border border-solid border-[#E5E5E5] rounded-[4px] text-[#737373] px-[13px] py-[11px] flex items-center justify-between`}
        onClick={() =>
          handleDropdown(name === "sorting" ? "sorting" : "categories")
        }
      >
        {dropdownValue || "Select"}
        <IoIosArrowDown size={20} color="#171717" />
      </button>

      {isDropDownOpen && (
        <div
          className={`dropdown-values bg-white shadow-xl border border-solid border-[#E4E4E4] px-[15px] py-[11px] rounded-[4px] absolute top-[calc(100%_+_5px)] z-10 ${
            isFilter ? "w-full sm:w-[202px]" : "w-full"
          }`}
        >
          {dropdownValues.map((value, index) => {
            return (
              <div
                key={index}
                onClick={() =>
                  onChange(name === "sorting" ? "sorting" : "categories", value)
                }
                className="dropdown-value leading-[22px] cursor-pointer"
              >
                {value}
              </div>
            );
          })}
        </div>
      )}

      <p className="text-[12px] text-[#FF0000] mt-1">{error}</p>
    </div>
  );
}

export default CommonDropdown;
