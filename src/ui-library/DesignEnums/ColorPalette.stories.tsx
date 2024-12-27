import type { Meta, StoryObj } from '@storybook/react';
import { messageStyles, messageBackgrounds, messageHoverBackgrounds } from './MessageType';

const isColorDark = (hex: string): boolean => {
  // Remove the hash if it exists
  const color = hex.replace('#', '');
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  
  // Calculate relative luminance
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 180;
};

const ColorPalette = () => {
  const colorGroups = [
    {
      title: 'Border Colors',
      colors: Object.entries(messageStyles).map(([type, className]) => ({
        name: type,
        className,
        hex: {
          'border-green-600': '#16A34A',
          'border-emerald-400': '#34D399',
          'border-orange-400': '#FB923C',
          'border-red-600': '#DC2626',
          'border-purple-400': '#C084FC',
        }[className],
      })),
    },
    {
      title: 'Background Colors',
      colors: Object.entries(messageBackgrounds).map(([type, className]) => ({
        name: type,
        className,
        hex: {
          'bg-green-50': '#F0FDF4',
          'bg-emerald-50': '#ECFDF5',
          'bg-orange-50': '#FFF7ED',
          'bg-red-50': '#FEF2F2',
          'bg-purple-50': '#FAF5FF',
        }[className],
      })),
    },
    {
      title: 'Hover Background Colors',
      colors: Object.entries(messageHoverBackgrounds).map(([type, className]) => ({
        name: type,
        className,
        hex: {
          'hover:bg-green-50': '#F0FDF4',
          'hover:bg-emerald-50': '#ECFDF5',
          'hover:bg-orange-50': '#FFF7ED',
          'hover:bg-red-50': '#FEF2F2',
          'hover:bg-purple-50': '#FAF5FF',
        }[className],
      })),
    },
  ];

  return (
    <div className="space-y-8">
      {colorGroups.map((group) => (
        <div key={group.title} className="space-y-2">
          <h3 className="text-lg font-medium mb-3">{group.title}</h3>
          <div className="flex">
            {group.colors.map((color) => (
              <div
                key={color.name}
                className="flex-1"
                style={{ backgroundColor: color.hex }}
              >
                <div className={`p-2 text-xs ${
                  isColorDark(color.hex) 
                    ? 'bg-white/90 text-black' 
                    : 'bg-black/90 text-white'
                } backdrop-blur-sm flex flex-col gap-0.5`}>
                  <div className="font-medium">{color.name}</div>
                  <div className={`${
                  isColorDark(color.hex) 
                  ? 'bg-white/90 text-black' 
                  : 'bg-black/90 text-white'
                  } text-[10px]`}>{color.className}</div>
                  <div className={`${
                  isColorDark(color.hex) 
                  ? 'bg-white/90 text-black' 
                  : 'bg-black/90 text-white'
                  } mt-1 font-mono`}>{color.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta = {
  title: 'UI/Color Palette',
  component: ColorPalette,
};
  
export default meta;
type Story = StoryObj<typeof ColorPalette>;
  
export const Colors: Story = {
  render: ColorPalette,
};
