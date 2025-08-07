import React from 'react';

interface TextAreaProps {
  label: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const TextArea = ({
  label,
  value,
  placeholder,
  disabled,
  onChange,
}: TextAreaProps) => (
  <>
    <label className="label" htmlFor={`${label}-input`}>
      {label}
    </label>
    <textarea
      id={`${label}-input`}
      className="textarea h-24 w-full"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  </>
);

export default TextArea;
