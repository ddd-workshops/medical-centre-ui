import type { InputHTMLAttributes } from 'react';

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const TextInput = ({ label, value, onChange, error, type = 'text', ...props }: TextInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-green-700 mb-1">{label}</label>
      <input
        type={type}
        className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
