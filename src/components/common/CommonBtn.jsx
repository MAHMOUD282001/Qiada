import React from "react";

function CommonBtn({children, style, type, handleOnClick}) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      onClick={handleOnClick}
      className={`px-[23px] py-[11px] font-[400] rounded-[4px] text-center ${style}`}
    >
      {children}
    </button>
  );
}

export default CommonBtn;
