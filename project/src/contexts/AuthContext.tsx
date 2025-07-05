import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'student' | 'lawyer' | 'public' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  specialization?: string;
  experience?: number;
  location?: string;
  rating?: number;
  verified?: boolean;
  barCertificate?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  signup: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for existing user in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data based on role
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0],
      email,
      role,
      avatar: `https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400`,
      ...(role === 'lawyer' && {
        specialization: 'Criminal Law',
        experience: 5,
        location: 'Delhi',
        rating: 4.5,
        verified: true,
        barCertificate: 'BAR123456'
      })
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const signup = async (name: string, email: string, password: string, role: UserRole) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role,
      avatar: `https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400`,
      ...(role === 'lawyer' && {
        specialization: 'Constitutional Law',
        experience: 3,
        location: 'Mumbai',
        rating: 4.2,
        verified: false
      })
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};