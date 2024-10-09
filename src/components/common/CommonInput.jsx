import React from "react";

function CommonInput({
  type,
  name,
  placeholder,
  id,
  value,
  defaultValue,
  error,
  style,
  fileRef,
  accept,
  isPrice,
  onChange,
}) {
  return (
    <>
      <div className={isPrice ? "px-[13px] py-[11px] h-[42px] flex" : ""}>
        <input
          type={type}
          ref={fileRef}
          name={name}
          id={id}
          accept={accept}
          placeholder={placeholder}
          {...value}
          defaultValue={defaultValue}
          {...(onChange ? { onChange: (e) => onChange(e) } : null)}
          className={`outline-none text-[#737373] text-[14px] ${style}`}
        />
      </div>
      <p className="text-[12px] text-[#FF0000] mt-1">{error}</p>
    </>
  );
}

export default CommonInput;
