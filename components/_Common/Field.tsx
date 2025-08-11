'use client';
import React, { useState } from 'react';

interface FieldProps {
  label: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  isRequired: boolean;
  onChange: (value: string) => void;
}

const Field = ({
  label,
  value,
  placeholder,
  disabled,
  isRequired,
  onChange,
}: FieldProps) => {
  // ToDo: implement proper validation once more feilds are required
  const [touched, setTouched] = useState(false);
  const isInvalid = isRequired && touched && value.trim().length === 0;
  return (
    <>
      <label
        className={`label ${isInvalid ? 'text-error' : ''}`}
        htmlFor={`${label}-input`}
      >
        {label}
      </label>
      <input
        id={`${label}-input`}
        type="text"
        className={`input w-full ${isInvalid ? 'input-error' : 'mb-3'}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          if (!touched) setTouched(true);
        }}
        disabled={disabled}
        required={isRequired}
        onBlur={() => setTouched(true)}
      />
      {isInvalid && (
        <span className="text-error mb-3 text-xs italic">
          This is a required field.
        </span>
      )}
    </>
  );
};

export default Field;
