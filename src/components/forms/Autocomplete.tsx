import { useState, useRef, useEffect } from 'react';
import { TextInput } from './TextInput';

type Option = {
  id: string;
  label: string;
};

type AutocompleteProps = {
  options: Option[];
  renderInput?: (params: { 
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
  }) => React.ReactNode;
  onSelect: (option: Option) => void;
  maxItems?: number;
};

export const Autocomplete = ({
  options, onSelect, maxItems = 5,
  renderInput = ({ value, onChange }) => ( <TextInput value={value} onChange={onChange} placeholder="Search..." /> ),
}: AutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filtered = options
      .filter((option) => 
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      )
      .slice(0, maxItems);
    setFilteredOptions(filtered);
  }, [inputValue, options, maxItems]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <strong key={i}>{part}</strong> : part
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsOpen(true);
  };

  return (
    <div ref={wrapperRef} className="relative">
      {renderInput({
        value: inputValue,
        onChange: handleInputChange,
        onFocus: () => setIsOpen(true)
      })}
      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {filteredOptions.map((option) => (
            <li
              key={option.id}
              className="px-4 py-2 cursor-pointer hover:bg-green-50"
              onClick={() => {
                onSelect(option);
                setInputValue(option.label);
                setIsOpen(false);
              }}
            >
              {highlightMatch(option.label, inputValue)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

