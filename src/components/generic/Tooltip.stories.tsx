import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Tooltip, TooltipDirection, TooltipSize } from './Tooltip';

const meta = {
  title: 'BSA/Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="p-20">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
};

export const AllDirections: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {Object.values(TooltipDirection).map((direction) => (
        <Tooltip key={direction} content={`${direction} tooltip`} direction={direction}>
          <Button>{direction}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {Object.values(TooltipSize).map((size) => (
        <Tooltip
          key={size}
          content="This is a sample tooltip content that demonstrates different widths based on the size prop"
          size={size}
        >
          <Button>{size} Tooltip</Button>
        </Tooltip>
      ))}
    </div>
  ),
};

export const DifferentSides: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip content="Top tooltip" side="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  ),
};

export const WithLongContent: Story = {
  args: {
    content: 'This is a very long tooltip content that will wrap to multiple lines when necessary.',
    children: <Button>Hover for long content</Button>,
  },
};
