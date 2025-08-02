import '../app/globals.css';
import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#333' },
        light: { name: 'Light', value: '#F5F5F5' },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
};

export default preview;
