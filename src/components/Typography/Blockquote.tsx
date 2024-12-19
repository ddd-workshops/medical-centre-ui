interface BlockquoteProps {
  children: React.ReactNode;
  className?: string;
}

export const Blockquote = ({ children, className = '' }: BlockquoteProps) => (
  <blockquote className={`pl-4 border-l-4 border-green-500 italic ${className}`}>
    {children}
  </blockquote>
);
