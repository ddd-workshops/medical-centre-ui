import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextInput } from '../forms/TextInput';
import { RadioGroup } from '../forms/RadioGroup';

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
          <RadioGroup
            header="Choose recovery option"
            options={[
              { id: 'remind-login', label: 'Remind me my login', value: 'remind-login' },
              { id: 'reset-password', label: 'Reset my password', value: 'reset-password' },
            ]}
            value={resetOption}
            onChange={(value) => setResetOption(value as ResetOption)}
          />
          
          <TextInput
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            required
          />

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
