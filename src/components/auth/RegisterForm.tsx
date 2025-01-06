import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { PasswordInput } from '../../ui-library/Forms/PasswordInput';
import { PhoneInput } from '../../ui-library/Forms/PhoneInput';
import { Button } from '../../ui-library/Generic/Button';
import { TextInput } from '../../ui-library/Forms/TextInput';
import { H2 } from '../../ui-library/Typography/Headings';
import { authService } from '../../http/authService';
import { styles } from '../../ui-library/DesignEnums';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    phone: '',
    password: '',
  });
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPhoneValid) {
      setErrors(prev => ({ ...prev, phone: 'Please enter a valid phone number' }));
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors(prev => ({ ...prev, password: 'Passwords do not match' }));
      return;
    }

    try {
      await authService.register({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phone,
      });
      navigate('/');
    } catch (error) {
      // TODO:
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${styles.ACCENT.background}`}>
      <div className={`bg-white p-8 rounded-xl shadow-lg w-96 border ${styles.ACCENT.border}`}>
        <H2 className={`${styles.ACCENT.text} text-center`}>Create Account</H2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            label="First Name"
            value={formData.firstName}
            onChange={(value) => setFormData({ ...formData, firstName: value })}
            required
          />
          <TextInput
            label="Last Name"
            value={formData.lastName}
            onChange={(value) => setFormData({ ...formData, lastName: value })}
            required
          />
          <TextInput
            label="Email"
            type="email"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            required
          />
          <PhoneInput
            label="Phone"
            value={formData.phone}
            onChange={(value, isValid) => {
              setFormData(prev => ({ ...prev, phone: value }));
              setIsPhoneValid(isValid);
              if (isValid) {
                setErrors(prev => ({ ...prev, phone: '' }));
              }
            }}
            required
          />
          {errors.phone && (
            <p className={`text-sm ${styles.ALERT.text}`}>{errors.phone}</p>
          )}
          <PasswordInput
            label="Password"
            value={formData.password}
            onChange={(value) => {
              setFormData(prev => ({ ...prev, password: value }));
              setErrors(prev => ({ ...prev, password: '' }));
            }}
            required
          />
          <PasswordInput
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={(value) => {
              setFormData(prev => ({ ...prev, confirmPassword: value }));
              setErrors(prev => ({ ...prev, password: '' }));
            }}
            required
          />
          {errors.password && (
            <p className={`text-sm ${styles.ALERT.text}`}>{errors.password}</p>
          )}
          <Button 
            type="submit" 
            fullWidth
            disabled={!isPhoneValid || !formData.password || !formData.confirmPassword}
          >
            Create Account
          </Button>
        </form>
        <p className={`mt-4 text-center text-sm ${styles.ACCENT.text}`}>
          Already have an account?{' '}
          <Link to="/login" className={`font-medium ${styles.ACCENT.textHover} underline`}>
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};