import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { X } from 'lucide-react';
import { Tag } from './Tag';
import { TagList } from './TagList';

const meta = {
  title: 'BSA/Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Tag Text',
    variant: 'PRIMARY'
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'General Dentistry',
    variant: 'PRIMARY'
  }
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tag variant="PRIMARY">General</Tag>
      <Tag variant="SECONDARY">Orthodontics</Tag>
      <Tag variant="OUTLINE">Implants</Tag>
      <Tag variant="WARNING">Urgent</Tag>
      <Tag variant="ERROR">Cancelled</Tag>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Tag size="SMALL">Small</Tag>
      <Tag size="MEDIUM">Medium</Tag>
      <Tag size="LARGE">Large</Tag>
    </div>
  )
};

export const WithIcon: Story = {
  args: {
    children: 'Removable',
    icon: X,
    onIconClick: action('icon-clicked')
  }
};

export const TagListExample: Story = {
  render: () => (
    <TagList
      tags={[
        'General Dentistry',
        'Orthodontics',
        'Implants',
        'Periodontics',
        'Endodontics'
      ]}
      icon={X}
      onIconClick={action('tag-removed')}
      onTagClick={action('tag-clicked')}
    />
  )
};