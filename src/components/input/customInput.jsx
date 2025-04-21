import React from "react";
import { Input } from "@material-tailwind/react";

export default function InputField({
                                       label = "",
                                       name,
                                       value,
                                       onChange,
                                       className = "",
                                       type = "text",
                                       ...props
                                   }) {
    return (
        <div className="w-full">
            <label htmlFor={name} className="block text-sm font-medium text-black-700 ">
                {label}
            </label>
            <Input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                crossOrigin=""
                className={`!bg-white !text-black !text-left !font-medium 
                    !rounded-xl !px-4  placeholder:text-gray-400 
                    hover:!bg-gray-50 transition duration-200 ${className}`}
                containerProps={{
                    className: "w-full",
                }}
                {...props}
            />
        </div>
    );
}
