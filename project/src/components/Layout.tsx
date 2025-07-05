import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Menu, 
  X, 
  Scale, 
  Bell, 
  Search, 
  User, 
  BookOpen, 
  Users, 
  FileText, 
  MessageSquare,
  Home,
  Settings,
  LogOut
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, setCurrentPage }) => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavigationItems = () => {
    if (!user) return [];

    const commonItems = [
      { name: 'Home', page: 'dashboard', icon: Home },
      { name: 'News Feed', page: 'news', icon: FileText },
      { name: 'Search', page: 'search', icon: Search },
    ];

    switch (user.role) {
      case 'student':
        return [
          ...commonItems,
          { name: 'Study Materials', page: 'study', icon: BookOpen },
          { name: 'Mock Tests', page: 'tests', icon: FileText },
        ];
      case 'lawyer':
        return [
          ...commonItems,
          { name: 'Dashboard', page: 'dashboard', icon: User },
          { name: 'Clients', page: 'clients', icon: Users },
          { name: 'Messages', page: 'messages', icon: MessageSquare },
        ];
      case 'public':
        return [
          ...commonItems,
          { name: 'Find Lawyers', page: 'find-lawyers', icon: Users },
          { name: 'Consultations', page: 'consultations', icon: MessageSquare },
        ];
      case 'admin':
        return [
          ...commonItems,
          { name: 'Admin Panel', page: 'admin', icon: Settings },
          { name: 'Users', page: 'admin-users', icon: Users },
        ];
      default:
        return commonItems;
    }
  };

  const navigationItems = getNavigationItems();

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('dashboard')}>
              <Scale className="h-8 w-8 text-blue-900 mr-2" />
              <span className="text-xl font-bold text-gray-900">LegalHub</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.page)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.page
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </button>
              ))}
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-900 p-2 rounded-md">
                <Bell className="h-5 w-5" />
              </button>
              
              {user && (
                <div className="flex items-center space-x-2">
                  <img
                    src={user.avatar || `https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400`}
                    alt={user.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="hidden md:block text-sm font-medium text-gray-700">
                    {user.name}
                  </span>
                  <button
                    onClick={logout}
                    className="text-gray-700 hover:text-red-600 p-2 rounded-md transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-900"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.page)}
                  className={`flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === item.page
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;