import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/FakeAuthContext';

interface IProps {
  children: ReactElement;
}

const ProtectedRoute = ({ children }: IProps) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
