import type { InputHTMLAttributes } from 'react';

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  value: string;
  onChange: (phrase: string) => void;
  error?: string;
}

export const TextInput = ({ label, value, onChange, error, type = 'text', id, ...props }: TextInputProps) => {
  const inputId = id || `text-input-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-green-700 mb-1">
        {label}
        <input
          id={inputId}
          type={type}
          className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition mt-1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
      </label>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
