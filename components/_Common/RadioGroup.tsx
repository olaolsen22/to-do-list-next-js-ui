import React from 'react';

interface OptionProps {
  label: string;
  value: number;
}

export interface RadioGroupProps {
  label: string;
  selectedValue: string;
  options: Array<OptionProps>;
  disabled?: boolean;
  onChange: (value: string) => void;
}

const RadioGroup = ({
  label,
  options,
  selectedValue,
  disabled,
  onChange,
}: RadioGroupProps) => (
  <fieldset className="form-control">
    <legend className="label">
      <span className="label-text mb-1.5">{label}</span>
    </legend>
    <div className="mb-3 flex w-full gap-6">
      {options.map((option) => (
        <label
          key={option.value}
          htmlFor={`${label}-${option.value}`}
          className="label gap-2"
        >
          <input
            type="radio"
            id={`${label}-${option.value}`}
            name={label}
            className="radio radio-xs"
            value={option.value}
            checked={selectedValue === option.value.toString()}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
          />
          <span className={`label-text ${disabled && 'cursor-not-allowed'}`}>
            {option.label}
          </span>
        </label>
      ))}
    </div>
  </fieldset>
);

export default RadioGroup;
