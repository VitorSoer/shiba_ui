import Spinner from './index';
import { Meta, StoryObj } from '@storybook/react';
import { ISpinner } from '@shiba_ui/shared/src/components/Spinner';
import { summaryColors } from '@shiba_ui/shared/src/constants/stories';
import { summarySizes } from '@shiba_ui/shared/src/constants/stories';

const meta: Meta<ISpinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'object' },
      description: 'Accepts predefined sizes or numerical values.',
      table: {
        type: { summary: summarySizes },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'object',
      description: 'Accepts predefined theme colors or CSS color strings.',
      table: {
        type: { summary: summaryColors },
        defaultValue: { summary: 'violet' },
      },
    },
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

(Spinner as React.FC).displayName = 'Spinner';
