import type { Meta, StoryObj } from '@storybook/react';
import { Tree, type TreeNode } from './Tree';
import { styles } from '../DesignEnums';

const meta: Meta<typeof Tree> = {
  title: 'UI/Molecules/Tree',
  component: Tree,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tree>;

const sampleData: TreeNode[] = [
  {
    id: '1',
    label: 'Root Node 1',
    children: [
      {
        id: '1-1',
        label: 'Child 1.1',
        children: [
          { id: '1-1-1', label: 'Grandchild 1.1.1' },
          { id: '1-1-2', label: 'Grandchild 1.1.2' },
        ],
      },
      { id: '1-2', label: 'Child 1.2' },
    ],
  },
  {
    id: '2',
    label: 'Root Node 2',
    children: [
      { id: '2-1', label: 'Child 2.1' },
      { id: '2-2', label: 'Child 2.2' },
    ],
  },
  {
    id: '3',
    label: 'Root Node 3',
  },
];

const geographicalData: TreeNode[] = [
  {
    id: 'uk',
    label: 'United Kingdom',
    children: [
      {
        id: 'eng',
        label: 'England',
        children: [
          {
            id: 'london',
            label: 'Greater London',
            children: [
              { id: 'westminster', label: 'Westminster' },
              { id: 'camden', label: 'Camden' },
              { id: 'greenwich', label: 'Greenwich' }
            ]
          },
          {
            id: 'manchester',
            label: 'Greater Manchester',
            children: [
              { id: 'mcity', label: 'Manchester City' },
              { id: 'bolton', label: 'Bolton' },
              { id: 'stockport', label: 'Stockport' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'pl',
    label: 'Poland',
    children: [
      {
        id: 'mazowieckie',
        label: 'Mazowieckie',
        children: [
          {
            id: 'warsaw',
            label: 'Warsaw Region',
            children: [
              { id: 'waw-center', label: 'Warsaw' },
              { id: 'piaseczno', label: 'Piaseczno' }
            ]
          }
        ]
      },
      {
        id: 'malopolskie',
        label: 'Małopolskie',
        children: [
          {
            id: 'krakow',
            label: 'Kraków Region',
            children: [
              { id: 'krk-center', label: 'Kraków' },
              { id: 'wieliczka', label: 'Wieliczka' }
            ]
          }
        ]
      }
    ]
  }
];

const complexLabelData: TreeNode[] = [
  {
    id: '1',
    label: (
      <div className="flex items-center gap-2">
        <span className="font-bold">Brighton Dental Centre</span>
        <span className={`text-xs ${styles.ACCENT.background} px-2 py-0.5 rounded-full`}>Main Branch</span>
      </div>
    ),
    children: [
      {
        id: 'dept-1',
        label: (
          <div className="flex items-center gap-2">
            <span className="font-semibold">General Dentistry</span>
            <span className="text-xs text-gray-500">(8 specialists)</span>
          </div>
        ),
        children: [
          {
            id: 'doc-1-1',
            label: (
              <div className="flex items-center gap-2">
                <span>Dr. Sarah Wilson</span>
                <span className="text-xs text-gray-500">(General Dentist)</span>
              </div>
            )
          },
          {
            id: 'doc-1-2',
            label: (
              <div className="flex items-center gap-2">
                <span>Dr. Michael Chen</span>
                <span className="text-xs text-gray-500">(Family Dentist)</span>
              </div>
            )
          }
        ]
      },
      {
        id: 'dept-2',
        label: (
          <div className="flex items-center gap-2">
            <span className="font-semibold">Orthodontics</span>
            <span className="text-xs text-gray-500">(5 specialists)</span>
          </div>
        ),
        children: [
          {
            id: 'doc-2-1',
            label: (
              <div className="flex items-center gap-2">
                <span>Dr. Emma Thompson</span>
                <span className="text-xs text-gray-500">(Orthodontist)</span>
              </div>
            )
          },
          {
            id: 'doc-2-2',
            label: (
              <div className="flex items-center gap-2">
                <span>Dr. James Rodriguez</span>
                <span className="text-xs text-gray-500">(Dental Alignment Specialist)</span>
              </div>
            )
          }
        ]
      },
      {
        id: 'dept-3',
        label: (
          <div className="flex items-center gap-2">
            <span className="font-semibold">Oral Surgery</span>
            <span className="text-xs text-gray-500">(6 specialists)</span>
          </div>
        ),
        children: [
          {
            id: 'doc-3-1',
            label: (
              <div className="flex items-center gap-2">
                <span>Dr. Alexandra Kim</span>
                <span className="text-xs text-gray-500">(Oral Surgeon)</span>
              </div>
            )
          },
          {
            id: 'doc-3-2',
            label: (
              <div className="flex items-center gap-2">
                <span>Dr. Robert Brooks</span>
                <span className="text-xs text-gray-500">(Maxillofacial Surgeon)</span>
              </div>
            )
          }
        ]
      },
      {
        id: 'dept-4',
        label: (
          <div className="flex items-center gap-2">
            <span className="font-semibold">Pediatric Dentistry</span>
            <span className="text-xs text-gray-500">(4 specialists)</span>
          </div>
        ),
        children: [
          {
            id: 'doc-4-1',
            label: (
              <div className="flex items-center gap-2">
                <span>Dr. Lisa Martinez</span>
                <span className="text-xs text-gray-500">(Pediatric Dentist)</span>
              </div>
            )
          },
          {
            id: 'doc-4-2',
            label: (
              <div className="flex items-center gap-2">
                <span>Dr. David Singh</span>
                <span className="text-xs text-gray-500">(Children's Dental Specialist)</span>
              </div>
            )
          }
        ]
      }
    ]
  }
];

export const Default: Story = {
  args: {
    data: sampleData,
  },
};

export const SingleNode: Story = {
  args: {
    data: [{ id: '1', label: 'Single Node' }],
  },
};

export const GeographicalHierarchy: Story = {
  args: {
    data: geographicalData,
  },
};

export const WithComplexLabels: Story = {
  args: {
    data: complexLabelData,
  },
};
