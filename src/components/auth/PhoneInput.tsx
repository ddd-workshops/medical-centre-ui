import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import type { CountryDialCodeFormat } from './dialCodes';
import { countriesDialCodes } from './dialCodes';

type PhoneInputProps = {
  value: string;  // Full number in format: "+48 123456789"
  onChange: (value: string, isValid: boolean) => void;
  label?: string;
  required?: boolean;
  className?: string;
};

export const PhoneInput = ({ value, onChange, label = 'Phone Number', required = false, className = '' }: PhoneInputProps) => {
  const [selectedCountry, setSelectedCountry] = useState(countriesDialCodes[6]); // Default to Poland
  const [showDropdown, setShowDropdown] = useState(false);
  const [rawPhoneNumber, setRawPhoneNumber] = useState('');

  // Split incoming value into dial code and number
  useEffect(() => {
    if (value) {
      const [dialCode, ...rest] = value.split(' ');
      const number = rest.join('').replace(/\s/g, '');
      const country = countriesDialCodes.find(c => c.dialCode === dialCode) || countriesDialCodes[6];
      
      setSelectedCountry(country);
      setRawPhoneNumber(number);
    }
  }, [value]);

  const formatForDisplay = (number: string): string => {
    const format = selectedCountry.format;
    let result = '';
    let numberIndex = 0;

    for (const char of format) {
      if (numberIndex >= number.length) {
        result += char === 'X' ? '_' : char;
      } else if (char === 'X') {
        result += number[numberIndex++];
      } else {
        result += char;
      }
    }

    return result;
  };

  const getRequiredLength = (format: string): number => {
    return format.split('').filter(char => char === 'X').length;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newDigits = e.target.value.replace(/[^0-9]/g, '');
    const maxLength = getRequiredLength(selectedCountry.format);
    const trimmedDigits = newDigits.slice(0, maxLength);
    
    setRawPhoneNumber(trimmedDigits);
    
    const fullNumber = `${selectedCountry.dialCode} ${trimmedDigits}`;
    const isValid = trimmedDigits.length === maxLength;
    onChange(fullNumber, isValid);
  };

  const handleCountryChange = (country: CountryDialCodeFormat) => {
    setSelectedCountry(country);
    setShowDropdown(false);
    
    const fullNumber = `${country.dialCode} ${rawPhoneNumber}`;
    const isValid = rawPhoneNumber.length === getRequiredLength(country.format);
    onChange(fullNumber, isValid);
  };

  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-green-700">{label}</label>
      )}
      <div className="relative flex">
        <button
          type="button"
          className="flex items-center space-x-1 px-3 py-2 border border-r-0 border-green-200 rounded-l-lg bg-green-50 hover:bg-green-100 transition-colors"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="text-xl">{selectedCountry.flag}</span>
          <span className="text-sm text-green-800">{selectedCountry.dialCode}</span>
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <input
          type="tel"
          value={formatForDisplay(rawPhoneNumber)}
          onChange={handleInputChange}
          className="flex-1 px-4 py-2 border border-green-200 rounded-r-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition font-mono"
          placeholder={formatForDisplay('')}
          required={required}
        />
        
        {showDropdown && (
          <div className="absolute top-full left-0 mt-1 w-64 max-h-60 overflow-y-auto bg-white border border-green-200 rounded-lg shadow-lg z-10">
            {countriesDialCodes.map((country) => (
              <button
                key={country.code}
                type="button"
                className="flex items-center space-x-3 w-full px-4 py-2 text-left hover:bg-green-50 transition-colors"
                onClick={() => handleCountryChange(country)}
              >
                <span className="text-xl">{country.flag}</span>
                <span className="text-sm text-green-800">{country.name}</span>
                <span className="text-sm text-green-600 ml-auto">{country.dialCode}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
