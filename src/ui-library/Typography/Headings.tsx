interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className = '' }: HeadingProps) => (
  <h1 className={`text-2xl font-bold text-gray-900 mb-4 ${className}`}>{children}</h1>
);

export const H2 = ({ children, className = '' }: HeadingProps) => (
  <h2 className={`text-xl font-bold text-gray-800 mb-3 ${className}`}>{children}</h2>
);

export const H3 = ({ children, className = '' }: HeadingProps) => (
  <h3 className={`text-lg font-semibold text-gray-700 mb-2 ${className}`}>{children}</h3>
);

export const H4 = ({ children, className = '' }: HeadingProps) => (
  <h4 className={`text-base font-semibold text-gray-600 mb-2 ${className}`}>{children}</h4>
);
