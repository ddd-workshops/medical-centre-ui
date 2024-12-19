import type { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const TextArea = ({ label, value, onChange, error, rows = 4, ...props }: TextAreaProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-green-700 mb-1">{label}</label>
      <textarea
        className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
