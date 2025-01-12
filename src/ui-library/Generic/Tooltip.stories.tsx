import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Tooltip, TooltipDirection } from './Tooltip';
import { PlusIcon } from 'lucide-react';

const meta = {
  title: 'UI/Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
    <div className="grid grid-cols-5 gap-4 w-[500px] h-[300px]">
      {/* Top row */}
      <div className="col-start-2">
        <Tooltip direction={TooltipDirection.TOP_LEFT} content="Top Left tooltip">
          <Button>↖</Button>
        </Tooltip>
      </div>
      <div>
        <Tooltip direction={TooltipDirection.TOP} content="Top tooltip">
          <Button>↑</Button>
        </Tooltip>
      </div>
      <div>
        <Tooltip direction={TooltipDirection.TOP_RIGHT} content="Top Right tooltip">
          <Button>↗</Button>
        </Tooltip>
      </div>

      {/* Middle row */}
      <div className="col-start-1 self-center">
        <Tooltip direction={TooltipDirection.LEFT} content="Left tooltip">
          <Button>←</Button>
        </Tooltip>
      </div>
      <div className="col-start-5 self-center">
        <Tooltip direction={TooltipDirection.RIGHT} content="Right tooltip">
          <Button>→</Button>
        </Tooltip>
      </div>

      {/* Bottom row */}
      <div className="col-start-2 self-end">
        <Tooltip direction={TooltipDirection.BOTTOM_LEFT} content="Bottom Left tooltip">
          <Button>↙</Button>
        </Tooltip>
      </div>
      <div className="self-end">
        <Tooltip direction={TooltipDirection.BOTTOM} content="Bottom tooltip">
          <Button>↓</Button>
        </Tooltip>
      </div>
      <div className="self-end">
        <Tooltip direction={TooltipDirection.BOTTOM_RIGHT} content="Bottom Right tooltip">
          <Button>↘</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Tooltip size="SMALL" content="Next available appointment: Today 15:30">
        <Button>Availability</Button>
      </Tooltip>
      <Tooltip 
        size="MEDIUM"
        content="Dr. Smith is a certified orthodontist with 15 years of experience in dental surgery and implant procedures. Available for consultations on Mondays and Wednesdays."
      >
        <Button>Doctor Info</Button>
      </Tooltip>
      <Tooltip
        size="LARGE"
        content={
          <div>
            <h3 className="font-bold mb-2">Treatment Plan - Root Canal</h3>
            <p className="mb-2">Comprehensive endodontic treatment procedure involving multiple visits.</p>
            <ul className="list-disc ml-4">
              <li>Initial examination and X-rays</li>
              <li>Local anesthesia administration</li>
              <li>Removal of infected pulp</li>
              <li>Canal cleaning and shaping</li>
            </ul>
          </div>
        }
      >
        <Button>Treatment Details</Button>
      </Tooltip>
    </div>
  ),
};

export const ProjectInfo: Story = {
  args: {
    content: (
      <div>
        <div className="font-semibold mb-1">Patient: John Smith</div>
        <div className="text-xs text-gray-600">
          Treatment: Dental Implants<br />
          Insurance: Complete Coverage<br />
          Last Visit: 15/03/2024
        </div>
      </div>
    ),
    children: <Button>Patient Details</Button>,
  },
};

export const TechStackInfo: Story = {
  args: {
    content: (
      <div className="text-sm">
        <span className="font-medium">Specializations:</span>
        <ul className="list-disc ml-4 mt-1 text-xs">
          <li>Orthodontics</li>
          <li>Periodontics</li>
          <li>Endodontics</li>
        </ul>
      </div>
    ),
    children: <Button>Specialties</Button>,
  },
};

export const BudgetWarning: Story = {
  args: {
    content: "Patient's insurance coverage expires in 7 days. Click to review renewal options.",
    children: <Button variant="WARNING">Insurance Alert</Button>,
  },
};

export const WithLongContent: Story = {
  args: {
    content: "This dental clinic specializes in advanced orthodontic treatments, serving over 500 patients monthly with a 98% satisfaction rate. Features state-of-the-art equipment for precise diagnoses and treatments.",
    children: <Button>Clinic Info</Button>,
  },
};

export const TooltipDemo = () => {
  return (
    <Tooltip content="Schedule new appointment">
      <button className="inline-flex size-[35px] items-center justify-center rounded-full bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black">
        <PlusIcon />
      </button>
    </Tooltip>
  );
};