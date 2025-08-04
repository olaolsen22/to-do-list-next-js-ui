import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import ToDoCard from '@/components/ToDoCard/ToDoCard';

const meta = {
  title: 'ToDoCard',
  component: ToDoCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: { onToggle: fn() },
} satisfies Meta<typeof ToDoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pending: Story = {
  args: {
    id: 1,
    title: 'To do title',
    date: '2025-08-01T12:00:00.000Z',
    isCompleted: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    priority: 1,
    tags: ['home'],
  },
};

export const Completed: Story = {
  args: {
    id: 1,
    title: 'To do title',
    date: '2025-08-01T12:00:00.000Z',
    isCompleted: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    priority: 1,
    tags: ['home'],
  },
};

export const LowPrioriy: Story = {
  args: {
    id: 1,
    title: 'To do title',
    date: '2025-08-01T12:00:00.000Z',
    isCompleted: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    priority: 1,
    tags: ['home'],
  },
};

export const NormalPriority: Story = {
  args: {
    id: 1,
    title: 'To do title',
    date: '2025-08-01T12:00:00.000Z',
    isCompleted: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    priority: 2,
    tags: ['home', 'study', 'work-from-home', 'office', 'books'],
  },
};

export const HighPrioriy: Story = {
  args: {
    id: 1,
    title: 'To do title',
    date: '2025-08-01T12:00:00.000Z',
    isCompleted: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    priority: 3,
    tags: ['home'],
  },
};
