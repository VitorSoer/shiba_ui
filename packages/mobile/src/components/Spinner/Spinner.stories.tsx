import Spinner from '.';
import { Meta, StoryObj } from '@storybook/react';
import { ISpinner } from '@shiba_ui/shared/src/components/Spinner';

const meta: Meta<ISpinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: { control: { type: 'object' } },
    color: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<ISpinner>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'violet',
  },
};
