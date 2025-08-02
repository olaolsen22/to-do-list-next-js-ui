import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import ToDoCard from '@/components/ToDoCard';

const meta = {
  title: 'ToDoCard',
  component: ToDoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onToggle: fn() },
} satisfies Meta<typeof ToDoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    title: 'To do title',
    date: '2025-08-01T12:00:00.000Z',
    isCompleted: false,
  },
};

export const Checked: Story = {
  args: {
    title: 'To do title',
    date: '2025-08-01T12:00:00.000Z',
    isCompleted: true,
  },
};
