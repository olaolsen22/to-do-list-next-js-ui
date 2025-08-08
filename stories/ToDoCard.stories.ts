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
    created_at: '2025-08-01T12:00:00.000Z',
    done: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    priority: 1,
  },
};

export const Completed: Story = {
  args: {
    id: 1,
    title: 'To do title',
    created_at: '2025-08-01T12:00:00.000Z',
    done: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    priority: 1,
  },
};

export const NormalPrioriy: Story = {
  args: {
    id: 1,
    title: 'To do title',
    created_at: '2025-08-01T12:00:00.000Z',
    done: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    priority: 1,
  },
};

export const MediumPriority: Story = {
  args: {
    id: 1,
    title: 'To do title',
    created_at: '2025-08-01T12:00:00.000Z',
    done: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    priority: 2,
  },
};

export const HighPrioriy: Story = {
  args: {
    id: 1,
    title: 'To do title',
    created_at: '2025-08-01T12:00:00.000Z',
    done: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    priority: 3,
  },
};
