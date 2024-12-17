import { useState } from 'react';
import { Link } from 'react-router-dom';

type ResetOption = 'remind-login' | 'reset-password';

export const ResetForm = () => {
  const [resetOption, setResetOption] = useState<ResetOption>('remind-login');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement reset logic
    console.log('Reset option:', resetOption, 'Email:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border border-green-100">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">Account Recovery</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                id="remind-login"
                value="remind-login"
                checked={resetOption === 'remind-login'}
                onChange={(e) => setResetOption(e.target.value as ResetOption)}
                className="text-green-600 focus:ring-green-500 h-4 w-4"
              />
              <label htmlFor="remind-login" className="text-sm text-green-700">
                Remind me my login
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                id="reset-password"
                value="reset-password"
                checked={resetOption === 'reset-password'}
                onChange={(e) => setResetOption(e.target.value as ResetOption)}
                className="text-green-600 focus:ring-green-500 h-4 w-4"
              />
              <label htmlFor="reset-password" className="text-sm text-green-700">
                Reset my password
              </label>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
          >
            {resetOption === 'remind-login' ? 'Send Login Details' : 'Reset Password'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-green-600">
          Remember your credentials?{' '}
          <Link to="/login" className="font-medium hover:text-green-800 underline">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};
