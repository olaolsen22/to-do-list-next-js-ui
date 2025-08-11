'use client';
import React, { useState, useEffect } from 'react';

import type { ToDoItemRow } from '@/types';

import Field from '../_Common/Field';
import RadioGroup from '../_Common/RadioGroup';
import TextArea from '../_Common/TextArea';

export type EditableToDoItem = Omit<
  ToDoItemRow,
  'id' | 'completed_on' | 'created_at'
>;

// Default data
const defaultData: EditableToDoItem = {
  title: '',
  done: false,
  description: '',
  priority: 1,
};

// Props
interface AddEditViewProps {
  data?: ToDoItemRow;
  onSave: (data: EditableToDoItem & { id?: number }) => void;
  saving?: boolean;
  shouldReset?: boolean;
  onResetComplete?: () => void;
}

const AddEditView = ({
  data,
  onSave,
  saving,
  shouldReset,
  onResetComplete,
}: AddEditViewProps) => {
  const [formData, setFormData] = useState<EditableToDoItem>(
    data || defaultData,
  );
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (shouldReset) {
      setFormData(defaultData);
      setHasInteracted(false); // Reset interaction state
      onResetComplete?.();
    }
  }, [shouldReset, onResetComplete]);

  useEffect(() => {
    setFormData(data || defaultData);
    setHasInteracted(!!data);
  }, [data]);

  const formDataHandler = (type: keyof ToDoItemRow, value: string | number) => {
    setFormData({ ...formData, [type]: value });
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  return (
    <div>
      <fieldset className="fieldset p-0">
        <Field
          label="Title"
          value={formData.title}
          onChange={(value) => formDataHandler('title', value)}
          disabled={saving}
          isRequired={hasInteracted}
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
          disabled={saving || formData.title.length === 0}
        >
          {saving && <span className="loading loading-spinner" />}
          Save
        </button>
      </fieldset>
    </div>
  );
};

export default AddEditView;
