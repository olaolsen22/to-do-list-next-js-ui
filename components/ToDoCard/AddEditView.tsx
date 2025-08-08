'use client';
import React, { useState } from 'react';

import type { ToDoDataProps } from '@/types';

import Field from '../_Common/Field';
import RadioGroup from '../_Common/RadioGroup';
import TextArea from '../_Common/TextArea';

const defaultData: ToDoDataProps = {
  title: '',
  created_at: '',
  done: false,
  description: '',
  priority: 1,
};

interface AddEditViewProps {
  data?: ToDoDataProps & { id?: number };
  onSave: (data: ToDoDataProps & { id?: number }) => void;
  saving?: boolean;
}

const AddEditView = ({ data, onSave, saving }: AddEditViewProps) => {
  const [formData, setFormData] = useState<ToDoDataProps>(data || defaultData);

  const formDataHandler = (type: keyof ToDoDataProps, value: string | number) =>
    setFormData({ ...formData, [type]: value });

  return (
    <div>
      <fieldset className="fieldset p-4">
        <Field
          label="Title"
          value={formData.title}
          onChange={(value) => formDataHandler('title', value)}
          disabled={saving}
        />
        <TextArea
          label="Description"
          value={formData.description || ''}
          onChange={(value) => formDataHandler('description', value)}
          disabled={saving}
        />
        <RadioGroup
          label="Priority"
          selectedValue={(formData.priority ?? 1).toString()}
          onChange={(value) => formDataHandler('priority', Number(value))}
          options={[
            { label: 'Normal', value: 1 },
            { label: 'Medium', value: 2 },
            { label: 'High', value: 3 },
          ]}
          disabled={saving}
        />
        <button
          className="btn btn-primary mt-4 ml-auto"
          onClick={() => onSave({ ...formData, id: data?.id })}
          disabled={saving}
        >
          {saving && <span className="loading loading-spinner" />}
          Save
        </button>
      </fieldset>
    </div>
  );
};

export default AddEditView;
