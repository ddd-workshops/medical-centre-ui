import type { ReactNode } from 'react';
import { Paragraph } from '../Typography/Paragraph';
import { styles } from '../DesignEnums';

interface FormLabelProps {
  label: ReactNode;
  description?: string;
  required?: boolean;
  htmlFor?: string;
}

export function FormLabel({ label, description, required, htmlFor }: FormLabelProps) {
  return (
    <div className="mb-1">
      <label htmlFor={htmlFor} className={`font-medium ${styles.DEFAULT.text}`}>
        {label} {required && <span className={styles.ALERT.text}>*</span>}
      </label>
      {description && (
        <Paragraph size="SMALL" className="text-gray-500 mt-0.5 mb-0">
          {description}
        </Paragraph>
      )}
    </div>
  );
}
