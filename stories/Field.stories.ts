import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import Field from '@/components/_Common/Field';

const meta = {
  title: 'Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

type FieldProps = React.ComponentProps<typeof Field>;

const MockProps: FieldProps = {
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
