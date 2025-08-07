import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import AddEditView from '@/components/ToDoCard/AddEditView';

const meta = {
  title: 'ToDoCard - AddEditView',
  component: AddEditView,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: { onSave: fn() },
} satisfies Meta<typeof AddEditView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddItem: Story = {
  args: {},
};

export const EditItem: Story = {
  args: {
    data: {
      id: 1,
      title: 'To do title',
      date: '2025-08-01T12:00:00.000Z',
      isCompleted: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      priority: 2,
      onToggle: fn(),
    },
  },
};

export const Saving: Story = {
  args: {
    data: {
      id: 1,
      title: 'To do title',
      date: '2025-08-01T12:00:00.000Z',
      isCompleted: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      priority: 1,
      onToggle: fn(),
    },
    saving: true,
  },
};
