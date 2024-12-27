import { Paragraph } from '../../ui-library/Typography/Paragraph';

export function ServiceHighlight({ service }: ServiceHighlightProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="mb-4">
        {service.icon}
      </div>
      <H4>{service.title}</H4>
      <Paragraph size="MEDIUM" className="text-gray-600">
        {service.description}
      </Paragraph>
    </div>
  );
}
