"use client";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type = "button", disabled, ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        className={cn(
          " bg-black rounded-md w-auto px-5 py-3 text-white font-semibold hover:opacity-75 transition disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"; //todo: displayName

export default Button;
