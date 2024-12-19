import { Paragraph } from '../Typography/Paragraph';

export function FormHelperText({ children }: FormHelperTextProps) {
  return (
    <Paragraph size="SMALL" className="text-gray-500 mt-1 mb-0">
      {children}
    </Paragraph>
  );
}
