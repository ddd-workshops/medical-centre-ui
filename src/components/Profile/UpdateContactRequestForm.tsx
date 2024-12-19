import React, { useState } from 'react';
import { useAuthStore } from '../Auth/AuthStore';
import { Button } from '../generic/Button';
import { Card } from '../generic/Card';
import { TextInput } from '../forms/TextInput';
import { PhoneInput } from '../forms/PhoneInput';

type ContactVerificationFormData = {
  email: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  postalCode: string;
};

export const UpdateContactRequestForm: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  const { user } = useAuthStore();
  const [formData, setFormData] = useState<ContactVerificationFormData>({
    email: user?.email ?? '',
    phoneNumber: user?.phoneNumber ?? '',
    streetAddress: user?.address?.street ?? '',
    city: user?.address?.city ?? '',
    postalCode: user?.address?.postalCode ?? '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically update the user profile with:
    // - formData.email
    // - formData.phoneNumber
    // - `${formData.streetAddress}, ${formData.city}, ${formData.postalCode}`
    onClose();
  };

  const handleInputChange = <K extends keyof ContactVerificationFormData>(
    field: K
  ) => (value: ContactVerificationFormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-lg mx-auto p-6"
      title='Please Verify Your Contact Information'>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange('email')}
        />
        
        <PhoneInput
          label="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange('phoneNumber')}
        />
        
        <div className="space-y-4">
          <TextInput
            label="Street Address"
            value={formData.streetAddress}
            onChange={handleInputChange('streetAddress')}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              label="City"
              value={formData.city}
              onChange={handleInputChange('city')}
            />
            <TextInput
              label="Postal Code"
              value={formData.postalCode}
              onChange={handleInputChange('postalCode')}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <Button
            variant="PRIMARY"
            onClick={onClose}
            type="button"
          >
            Confirm Data is Correct
          </Button>
          <Button
            type="submit"
            variant="PRIMARY"
          >
            Update Information
          </Button>
        </div>
      </form>
    </Card>
  );
};

