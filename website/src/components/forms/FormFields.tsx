"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-[14px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "rounded border bg-[#050B18] px-4 py-3 text-[16px] text-on-surface outline-none transition-all duration-200",
          focused ? "border-action-hover shadow-[0_0_0_1px_rgba(61,124,255,0.3)]" : "border-[#101F3A]",
          filled && "border-outline-variant",
          error && "border-error",
          className
        )}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setFilled(!!e.target.value);
        }}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-[12px] text-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-[14px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
        {label}
      </label>
      <textarea
        id={inputId}
        rows={5}
        className={cn(
          "resize-none rounded border bg-[#050B18] px-4 py-3 text-[16px] text-on-surface outline-none transition-all duration-200",
          focused ? "border-action-hover shadow-[0_0_0_1px_rgba(61,124,255,0.3)]" : "border-[#101F3A]",
          error && "border-error",
          className
        )}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-invalid={!!error}
        {...props}
      />
      {error && (
        <span className="text-[12px] text-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
};

export function Select({ label, options, error, className, id, ...props }: SelectProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-[14px] font-semibold uppercase tracking-[0.05em] text-on-surface-variant">
        {label}
      </label>
      <select
        id={inputId}
        className={cn(
          "rounded border bg-[#050B18] px-4 py-3 text-[16px] text-on-surface outline-none transition-all duration-200 focus:border-action-hover",
          error ? "border-error" : "border-[#101F3A]",
          className
        )}
        aria-invalid={!!error}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-[12px] text-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
