import '../src/index.css'; // Adjust the path to your main CSS file

import type { Preview } from "@storybook/react";

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
};

export default preview;
