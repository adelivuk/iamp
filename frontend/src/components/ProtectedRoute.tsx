import {Navigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import api from '../api';
import {REFRESH_TOKEN, ACCESS_TOKEN} from '../constants';
import {useState, useEffect} from 'react';
import LoadingIndicator from './LoadingIndicator';

import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({children}: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    auth().catch(() => setIsAuthenticated(false));
  }, []);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    try {
      const response = await api.post('/api/token/refresh/', {refresh: refreshToken});

      if (response.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
      console.error(error);
      setIsAuthenticated(false);
    }
  }

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    const decodedToken = jwtDecode(token);
    const tokenExpired = decodedToken.exp;
    const now = Date.now() / 1000;

    if (tokenExpired && tokenExpired < now) {
      await refreshToken();
    } else {
      setIsAuthenticated(true);
    }
  }

  if (isAuthenticated === null) {
    return <LoadingIndicator />;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
