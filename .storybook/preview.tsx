import '../src/index.css';
import "react-day-picker/src/style.css";

import { Provider as TooltipProvider } from '@radix-ui/react-tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Preview } from "@storybook/react";
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

// QueryClient setup
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

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
        order: [
          'UI',
          ['Typography', 'Forms', 'Atoms', 'Molecules'], 
          'BSA'
        ],
      },
    }
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <TooltipProvider delayDuration={0}>
            {Story()}
          </TooltipProvider>
        </MemoryRouter>
      </QueryClientProvider>
    ),
  ],
};

export default preview;
