import React from 'react';

interface FieldProps {
  label: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const Field = ({
  label,
  value,
  placeholder,
  disabled,
  onChange,
}: FieldProps) => (
  <>
    <label className="label" htmlFor={`${label}-input`}>
      {label}
    </label>
    <input
      id={`${label}-input`}
      type="text"
      className="input mb-3 w-full"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  </>
);

export default Field;
