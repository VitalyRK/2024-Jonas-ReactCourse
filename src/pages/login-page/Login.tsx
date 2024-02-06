import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/button/Button';
import PageNav from '@/components/page-nav/PageNav';
import { useAuth } from '@/context/FakeAuthContext';

import styles from './index.module.css';

const Login = () => {
  const { login, isAuthenticated, wrongLogin } = useAuth();
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate('/app', { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {wrongLogin && (
          <div>
            <p>Wrong email or password! Try again.</p>
          </div>
        )}

        <div>
          <Button typeStyle="primary" submit={true}>
            Login
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Login;
