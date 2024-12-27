interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const SuccessText = ({ children, className = '' }: TextProps) => (
  <span className={`text-green-600 font-medium ${className}`}>{children}</span>
);

export const FailText = ({ children, className = '' }: TextProps) => (
  <span className={`text-red-600 font-medium ${className}`}>{children}</span>
);
