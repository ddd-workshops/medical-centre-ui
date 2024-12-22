import '../src/index.css';
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip';
import type { Preview } from "@storybook/react";
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Atoms', 'Molecules', 'Forms', 'Notifications'],
      },
    }
  },
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={0}>
        {Story()}
      </TooltipProvider>
    ),
  ],
};

export default preview;
