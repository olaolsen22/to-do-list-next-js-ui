import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddEditView from '@/components/ToDoCard/AddEditView';
import type { ToDoCardProps } from '@/types';

describe('AddEditView Component', () => {
  const mockOnSave = jest.fn();
  const user = userEvent.setup();

  const mockEditData: ToDoCardProps = {
    id: 1,
    title: 'Existing Task',
    date: '2025-08-05T10:00:00.000Z',
    isCompleted: false,
    description: 'This is an existing task description.',
    priority: 2,
    onToggle: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders empty fields for a new item', () => {
      render(<AddEditView onSave={mockOnSave} />);

      expect(screen.getByLabelText('Title')).toHaveValue('');
      expect(screen.getByLabelText('Description')).toHaveValue('');
      expect(screen.getByLabelText('Normal')).toBeChecked();
    });

    it('renders pre-filled fields when editing an item', () => {
      render(<AddEditView data={mockEditData} onSave={mockOnSave} />);

      expect(screen.getByLabelText('Title')).toHaveValue(mockEditData.title);
      expect(screen.getByLabelText('Description')).toHaveValue(
        mockEditData.description,
      );
      expect(screen.getByLabelText('Medium')).toBeChecked();
    });
  });

  describe('Interaction', () => {
    it('updates form data on user input', async () => {
      render(<AddEditView onSave={mockOnSave} />);

      const titleInput = screen.getByLabelText('Title');
      const descriptionInput = screen.getByLabelText('Description');
      const highPriorityRadio = screen.getByLabelText('High');

      await user.type(titleInput, 'New Task Title');
      await user.type(descriptionInput, 'New Description');
      await user.click(highPriorityRadio);

      expect(titleInput).toHaveValue('New Task Title');
      expect(descriptionInput).toHaveValue('New Description');
      expect(highPriorityRadio).toBeChecked();
    });

    it('calls onSave with the correct data for a new item', async () => {
      render(<AddEditView onSave={mockOnSave} />);

      const titleInput = screen.getByLabelText('Title');
      const saveButton = screen.getByRole('button', { name: 'Save' });

      await user.type(titleInput, 'Final Task');
      await user.click(saveButton);

      expect(mockOnSave).toHaveBeenCalledTimes(1);
      expect(mockOnSave).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'Final Task',
          priority: 1,
        }),
      );
    });

    it('calls onSave with the correct data and id when editing', async () => {
      render(<AddEditView data={mockEditData} onSave={mockOnSave} />);

      const descriptionInput = screen.getByLabelText('Description');
      const saveButton = screen.getByRole('button', { name: 'Save' });

      await user.clear(descriptionInput);
      await user.type(descriptionInput, 'Updated Description');
      await user.click(saveButton);

      expect(mockOnSave).toHaveBeenCalledTimes(1);
      expect(mockOnSave).toHaveBeenCalledWith(
        expect.objectContaining({
          id: mockEditData.id,
          title: mockEditData.title,
          description: 'Updated Description',
          priority: mockEditData.priority,
        }),
      );
    });
  });

  describe('Saving State', () => {
    it('disables all fields when saving is true', () => {
      render(<AddEditView data={mockEditData} onSave={mockOnSave} saving />);

      expect(screen.getByLabelText('Title')).toBeDisabled();
      expect(screen.getByLabelText('Description')).toBeDisabled();
      expect(screen.getByLabelText('Normal')).toBeDisabled();
      expect(screen.getByLabelText('Medium')).toBeDisabled();
      expect(screen.getByLabelText('High')).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    });
  });
});
