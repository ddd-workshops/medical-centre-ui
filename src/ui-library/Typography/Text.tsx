import type { Size } from '../DesignEnums/Sizes';
import { textStyle, type MessageType } from '../DesignEnums/MessageType';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: Size;
  messageType?: MessageType;
}

const sizeClasses = {
  SMALL: 'text-sm',
  MEDIUM: 'text-base',
  LARGE: 'text-lg',
};

export const Text = ({ children, className = '', size = 'MEDIUM', messageType = 'DEFAULT' }: TextProps) => (
  <span className={`font-normal ${sizeClasses[size]} ${textStyle[messageType]} ${className}`}>
    {children}
  </span>
);
