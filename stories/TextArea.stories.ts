import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import TextArea from '@/components/_Common/TextArea';

const meta = {
  title: 'TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

type TextAreaProps = React.ComponentProps<typeof TextArea>;

const MockProps: TextAreaProps = {
  label: 'test field',
  value: 'test value',
  placeholder: 'sample placeholder',
  onChange: fn(),
};

export const Default: Story = {
  args: MockProps,
};

export const Disabled: Story = {
  args: {
    ...MockProps,
    disabled: true,
  },
};
