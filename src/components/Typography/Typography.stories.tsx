import { Meta, StoryObj } from '@storybook/react';
import { H1, H2, H3, H4 } from './Headings';
import { SuccessText, FailText } from './Text';
import { Blockquote } from './Blockquote';
import { Paragraph } from './Paragraph';

const meta: Meta = {
  title: 'BSA/Typography',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Typography: StoryObj = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
      </div>

      <div className="space-y-4">
        <Paragraph size="LARGE">
          Large text: Bright Smiles Architects provides comprehensive dental care with state-of-the-art technology and experienced professionals.
        </Paragraph>
        <Paragraph>
          Medium text (default): Our network of dental clinics offers a wide range of services from routine check-ups to advanced dental procedures.
        </Paragraph>
        <Paragraph size="SMALL">
          Small text: Schedule your appointment today and experience our patient-centered approach to dental care.
        </Paragraph>
      </div>

      <div className="space-y-2">
        <div>Status: <SuccessText>Operation successful</SuccessText></div>
        <div>Status: <FailText>Operation failed</FailText></div>
      </div>

      <Blockquote>
        "A smile is the universal welcome." - Max Eastman
      </Blockquote>
    </div>
  ),
};
