import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from './authStore';
import { PasswordInput } from './PasswordInput';
import { Avatar } from '../Avatar';
import { authService } from '../../api/services/authService';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const profile = await authService.login(formData);
      login(profile);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      // You might want to show an error message to the user
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border border-green-100">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>
          <PasswordInput
            label="Password"
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })}
          />
          <div className="flex justify-between items-center text-sm">
            <Link to="/reset" className="text-green-600 hover:text-green-800 hover:underline">
              Can't log in?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-green-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium hover:text-green-800 underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};