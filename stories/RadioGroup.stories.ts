import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import RadioGroup from '@/components/_Common/RadioGroup';

const meta = {
  title: 'RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

type RadioGroupProps = React.ComponentProps<typeof RadioGroup>;

const MockProps: RadioGroupProps = {
  label: 'Radio Group',
  selectedValue: '1',
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ],
  onChange: fn(),
  disabled: false,
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
