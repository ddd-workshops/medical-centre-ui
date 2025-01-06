import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextInput } from '../../ui-library/Forms/TextInput';
import { RadioGroup } from '../../ui-library/Forms/RadioGroup';
import { H2 } from '../../ui-library/Typography/Headings';
import { styles } from '../../ui-library/DesignEnums/ColorVariants';

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
    <div className={`min-h-screen flex items-center justify-center ${styles.ACCENT.background}`}>
      <div className={`bg-white p-8 rounded-xl shadow-lg w-96 border ${styles.ACCENT.border}`}>
        <H2 className={`${styles.ACCENT.textDark} text-center`}>Account Recovery</H2>
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
            className={`w-full ${styles.ACCENT.background} text-white py-2 rounded-lg ${styles.ACCENT.backgroundHover} transition duration-200 font-medium`}
          >
            {resetOption === 'remind-login' ? 'Send Login Details' : 'Reset Password'}
          </button>
        </form>
        <p className={`mt-4 text-center text-sm ${styles.ACCENT.text}`}>
          Remember your credentials?{' '}
          <Link to="/login" className={`font-medium ${styles.ACCENT.textHover} underline`}>
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};
