import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from './AuthStore';
import { PasswordInput } from '../../ui-library/Forms/PasswordInput';
import { Button } from '../../ui-library/Generic/Button';
import { TextInput } from '../../ui-library/Forms/TextInput';
import { H2 } from '../../ui-library/Typography/Headings';
import { styles } from '../../ui-library/DesignEnums/ColorVariants';

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
      login(formData);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${styles.ACCENT.background}`}>
      <div className={`bg-white p-8 rounded-xl shadow-lg w-96 border ${styles.ACCENT.border}`}>
        <H2 className={`${styles.ACCENT.textDark} text-center`}>Welcome Back</H2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            label="Email"
            type="email"
            value={formData.username}
            onChange={(value) => setFormData({ ...formData, username: value })}
            required
          />
          <PasswordInput
            label="Password"
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })}
          />
          <div className="flex justify-between items-center text-sm">
            <Link to="/reset" className={`${styles.ACCENT.text} ${styles.ACCENT.textHover} hover:underline`}>
              Can't log in?
            </Link>
          </div>
          <Button type="submit" fullWidth>
            Sign In
          </Button>
        </form>
        <p className={`mt-4 text-center text-sm ${styles.ACCENT.text}`}>
          Don't have an account?{' '}
          <Link to="/register" className={`font-medium ${styles.ACCENT.textHover} underline`}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};
