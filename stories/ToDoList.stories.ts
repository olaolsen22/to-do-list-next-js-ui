import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import ToDoList from '@/components/ToDoList';

const meta = {
  title: 'ToDoList',
  component: ToDoList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToDoList>;

export default meta;
type Story = StoryObj<typeof meta>;

type ToDoCardProps = React.ComponentProps<typeof ToDoList>;

const MockProps: ToDoCardProps = {
  items: [
    {
      id: 1,
      title: 'First To do title',
      description: '',
      created_at: '2025-08-01T12:00:00.000Z',
      done: false,
      priority: 1,
      onToggle: fn(),
    },
    {
      id: 2,
      description: '',
      title: 'Second To do title',
      created_at: '2025-08-02T12:00:00.000Z',
      done: true,
      priority: 1,
      onToggle: fn(),
    },
  ],
};

export const Default: Story = {
  args: {
    ...MockProps,
  },
};
