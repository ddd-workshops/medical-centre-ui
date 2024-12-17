import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from './authStore';
import { PasswordInput } from './PasswordInput';
import { PhoneInput } from './PhoneInput';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a simplified version. In real app, you'd call an API
    login({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border border-green-100">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">First Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">Last Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <PhoneInput
            value={formData.phone}
            onChange={(value, isValid) => {
              setFormData({ ...formData, phone: value });
              setIsPhoneValid(isValid);
            }}
            required
          />
          <PasswordInput
            label="Password"
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })}
          />
          <PasswordInput
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={(value) => setFormData({ ...formData, confirmPassword: value })}
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-green-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium hover:text-green-800 underline">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};