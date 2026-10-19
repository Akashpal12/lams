import { useState } from 'react';
import { User } from '../types';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    id: '1',
    name: 'Vibrant',
    userId: 'Vibrant',
    role: 'Super Admin',
    email: 'admin@vibrant.com'
  });

  const login = (userId: string) => {
    setIsAuthenticated(true);
    setUser({
      id: '1',
      name: userId || 'Vibrant',
      userId: userId || 'Vibrant',
      role: 'Super Admin',
      email: `${userId.toLowerCase()}@vibrant.com`
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    user,
    login,
    logout
  };
}
