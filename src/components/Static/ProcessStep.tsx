import React from 'react';
import { H3 } from '../../ui-library/Typography/Headings';
import { Paragraph } from '../../ui-library/Typography/Paragraph';

export interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  duration: string;
  image: string;
}

export function ProcessStep({ number, title, description, duration, image }: ProcessStepProps) {
  return (
    <div className="relative mb-12">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mt-1">
          {number}
        </div>
        <div className="ml-4 -mt-1">
          <H3 className="mb-0">{title}</H3>
          <Paragraph className="text-emerald-600 mt-0">{duration}</Paragraph>
        </div>
      </div>
      <div className="ml-16">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
          <Paragraph>{description}</Paragraph>
        </div>
      </div>
      {number < 5 && (
        <div className="absolute left-6 top-14 h-full w-0.5 bg-emerald-300" />
      )}
    </div>
  );
}
