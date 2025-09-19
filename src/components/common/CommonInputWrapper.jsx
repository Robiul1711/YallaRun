import { Select, DatePicker, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import dayjs from "dayjs";
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
  control,
}) => {
  const commonInputBox = `w-full ${type===`radio` ?" !py-1 !px-0":"border-[1px] border-[#D9E5E6] bg-[#F5F5F5]"} ${
    type === "select" || type === "date"
      ? "py-4 px-2 bg-[#F5F5F5]"
      : "py-5  px-5"
  } rounded-[12px] flex items-center gap-2`;

  const commonInputField = `w-full md:text-base text-[14px] border-none placeholder-[#747474] outline-none bg-transparent text-[#111] ${
    type === "textarea" && "h-[80px]"
  }`;

  const [show, setShow] = useState(false);

  // const handleSelectChange = (value) => {
  //   setValue(register_as, value, { shouldValidate: true });
  // };

  // const handleDateChange = (value) => {
  //   setValue(register_as, value, { shouldValidate: true });
  // };

  useEffect(() => {
    if (register && register_as) {
      register(register_as, validationRules);
    }
  }, [register, register_as, validationRules]);

  return (
    <div className="flex flex-col gap-2 w-full">
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
          <Controller
            name={register_as}
            control={control} 
            render={({ field }) => (
              <Select
                {...field}
                mode={multiple ? "multiple" : undefined}
                placeholder={placeholder}
                className="custom-select"
                style={{ width: "100%" }}
                showSearch
                options={options}
              />
            )}
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

        {type === "date" && (
          <Controller
            name={register_as}
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                style={{ width: "100%" }}
                placeholder={placeholder}
                className="common-datepicker"
                disabled={disabled}
                value={field.value ? dayjs(field.value, "DD/MM/YYYY") : null}
                onChange={(date) =>
                  field.onChange(date ? date.format("DD/MM/YYYY") : "")
                }
                // onChange={(date) => field.onChange(date)} // pass the dayjs object
                // value={field.value ?? null} // ensure it's null if empty
              />
            )}
          />
        )}
        {type === "radio" && options && (
          <div className="flex flex-col gap-3">
            <div className="flex gap-6">
              {options.map((opt) => (
                <label key={opt.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={opt.value}
                    {...register(register_as, validationRules)} // RHF handles onChange internally
                    disabled={disabled}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {errors?.[register_as] && (
        <p className="text-red-500 text-sm">{errors[register_as]?.message}</p>
      )}
    </div>
  );
};

export default CommonInputWrapper;
