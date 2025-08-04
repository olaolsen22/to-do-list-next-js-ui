import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import type ToDoCard from '@/components/ToDoCard';
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

type ToDoCardProps = React.ComponentProps<typeof ToDoCard>;

const MockProps: ToDoCardProps[] = [
  {
    id: 1,
    title: 'First To do title',
    date: '2025-08-01T12:00:00.000Z',
    isCompleted: false,
    onToggle: fn(),
  },
  {
    id: 2,
    title: 'Second To do title',
    date: '2025-08-02T12:00:00.000Z',
    isCompleted: true,
    onToggle: fn(),
  },
];

export const Default: Story = {
  args: {
    items: MockProps,
    onToggle: fn(),
  },
};
