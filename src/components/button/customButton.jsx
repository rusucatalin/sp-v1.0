import React from "react";
import { Button } from "@material-tailwind/react";

export default function CustomButton({
                                         label,
                                         onClick,
                                         color = "blue",
                                         size = "md",
                                         variant = "filled",
                                         fullWidth = false,
                                         icon = null,
                                         className = "",
                                         ...props
                                     }) {
    return (
        <Button
            color={color}
            size={size}
            variant={variant}
            fullWidth={fullWidth}
            onClick={onClick}
            className={`flex items-center gap-2 ${className}`}
            {...props}
        >
            {icon && <span>{icon}</span>}
            {label}
        </Button>
    );
}
