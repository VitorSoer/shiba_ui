import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from './Button';

const MyButtonMeta: Meta<typeof MyButton> = {
  title: 'MyButton',
  component: MyButton,
};

export default MyButtonMeta;

export const Basic: StoryObj<typeof MyButton> = {};

export const AnotherExample: StoryObj<typeof MyButton> = {
  args: {
    text: 'Another example',
  },
};
