import { viewports, backgrounds } from '../design/variables';

/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    layout: 'centered',
    viewport: { viewports: viewports },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'cotton',
      values: backgrounds,
    },
  },
  tags: ['autodocs'],
};

export default preview;
