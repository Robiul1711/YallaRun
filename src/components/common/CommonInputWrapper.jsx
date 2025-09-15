import { Select, Space } from "antd";

import React, { useState } from "react";

import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

const CommonInputWrapper = ({
  label = "",
  labelStar = "",
  register_as = "",
  register = "",
  errors = {},
  type = "",
  icon,
  validationRules = {},
  placeholder = "",
  options = [],
  setValue,
  disabled = false,
  value = "",
  multiple,
}) => {
  const commonInputBox = ` w-full border-[1px] border-[#D9E5E6]   ${
    type === "select" ? "py-3 bg-transparent" : "py-5 bg-[#F5F5F5]"
  } rounded-[12px] flex items-center gap-2 px-5`;
  const commonInputField = ` w-full md:text-base  text-[14px] border-none placeholder-[#747474] outline-none bg-transparent text-[#111] ${
    type === "textarea" && "h-[50px]"
  } `;

  const [show, setShow] = useState(false);

  const handleChange = (value) => {
    setValue(register_as, value, { shouldValidate: true });
  };

  return (
    <div className="flex flex-col gap-2  w-full">
      {label && (
        <label
          htmlFor={register_as}
          className="md:text-[20px] text-[14px] font-normal text-[#111]"
        >
          {label}{" "}
          {labelStar && <span className="text-red-500">{labelStar}</span>}
        </label>
      )}

      <div className={commonInputBox}>
        {icon && <span>{icon}</span>}
        {type === "text" && (
          <input
            type="text"
            defaultValue={value}
            name={register_as}
            id={register_as}
            {...register(register_as, validationRules)}
            placeholder={placeholder}
            className={commonInputField}
          />
        )}
        {type === "password" && (
          <>
            <input
              type={show ? "text" : "password"}
              name={register_as}
              id={register_as}
              {...register(register_as, validationRules)}
              placeholder={placeholder}
              className={commonInputField}
            />
            <button
              type="button"
              onClick={() => setShow((prevState) => !prevState)}
              className=""
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </button>
          </>
        )}
        {type === "textarea" && (
          <textarea
            name={register_as}
            id={register_as}
            {...register(register_as, validationRules)}
            placeholder={placeholder}
            className={commonInputField}
          />
        )}
        {type === "select" && options && (
          <Select
            mode={multiple ? "multiple" : undefined}
            placeholder={placeholder}
            style={{ width: "100%" }}
            onChange={handleChange}
            options={options}
          />
        )}
        {type === "number" && (
          <input
            type="number"
            name={register_as}
            defaultValue={value}
            id={register_as}
            {...register(register_as, validationRules)}
            placeholder={placeholder}
            className={`${commonInputField} no-spin`}
          />
        )}
        {type === "email" && (
          <input
            type="email"
            defaultValue={value}
            name={register_as}
            id={register_as}
            {...register(register_as, validationRules)}
            placeholder={placeholder}
            className={commonInputField}
            disabled={disabled}
          />
        )}
      </div>

      {errors?.[register_as] && (
        <p className=" text-red-500 text-sm">{errors[register_as]?.message}</p>
      )}
    </div>
  );
};

export default CommonInputWrapper;
